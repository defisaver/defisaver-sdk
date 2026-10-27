const dfs = require('../src');
const {getAssetInfo} = require("@defisaver/tokens");
const {getIlkInfo} = require("@defisaver/tokens");
const {assetAmountInWei} = require("@defisaver/tokens");
const {encodeForDsProxyCall} = require('./_recipeUtils');
const {assert} = require('chai');

describe('Recipe', () => {

  context('Basic: Open ETH vault, supply and generate', () => {
    let recipe;

    it('Constructor', () => {
      recipe = new dfs.Recipe(
        'MockTest',
        [
          new dfs.actions.maker.MakerOpenVaultAction('0x2F0b23f53734252Bda2277357e97e1517d6B042A', '0x5ef30b9986345249bc32d8928B7ee64DE9435E39'),
          new dfs.actions.maker.MakerSupplyAction('$1', assetAmountInWei(1000, 'WETH'), getIlkInfo('ETH-A').join, '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f', '0x5ef30b9986345249bc32d8928B7ee64DE9435E39'),
          new dfs.actions.maker.MakerGenerateAction('$1', assetAmountInWei(1000, 'DAI'), '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f', '0x5ef30b9986345249bc32d8928B7ee64DE9435E39'),
        ],
      );
    })

    it('encodeForDsProxyCall', () => encodeForDsProxyCall(recipe));
    it('getAssetsToApprove', async () => {
      const assetsToApprove = await recipe.getAssetsToApprove();
      assert.lengthOf(assetsToApprove, 1);
    });
    it('getEthValue', async () => {
      const ethValue = await recipe.getEthValue();
      assert.equal(assetAmountInWei(ethValue, 'WETH'), '0');
    });
  })

  context('Basic: Open WBTC vault, supply and generate', () => {
    let recipe;

    it('Constructor', () => {
      recipe = new dfs.Recipe(
        'MockTest',
        [
          new dfs.actions.maker.MakerOpenVaultAction(getIlkInfo('WBTC-A').join, '0x5ef30b9986345249bc32d8928B7ee64DE9435E39'),
          new dfs.actions.maker.MakerSupplyAction('$1', assetAmountInWei(1, 'WBTC'), getIlkInfo('WBTC-A').join, '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f', '0x5ef30b9986345249bc32d8928B7ee64DE9435E39'),
          new dfs.actions.maker.MakerGenerateAction('$1', assetAmountInWei(1000, 'DAI'), '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f', '0x5ef30b9986345249bc32d8928B7ee64DE9435E39'),
        ],
      );
    })

    it('encodeForDsProxyCall', () => encodeForDsProxyCall(recipe));
    it('getAssetsToApprove', async () => {
      const assetsToApprove = await recipe.getAssetsToApprove();
      assert.lengthOf(assetsToApprove, 1);
      assert.equal(assetsToApprove[0].asset, getAssetInfo('WBTC').address);
      assert.equal(assetsToApprove[0].owner, '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f');
    });
    it('getEthValue', async () => {
      const ethValue = await recipe.getEthValue();
      assert.equal(ethValue, '0');
    });
  })

  context('With basic param mapping', () => {
    let recipe;

    it('Constructor', () => {
      recipe = new dfs.Recipe(
        'MockTest',
        [
          new dfs.Action('MockDeposit', '0x0', ['uint256', 'uint256', 'uint256'], [123, 0, 456]),
          new dfs.Action('MockSwap', '0x0', ['uint256', 'address'], ['$1', '0x2F0b23f53734252Bda2277357e97e1517d6B042A']),
        ],
      );
    })

    it('encodeForDsProxyCall', () => encodeForDsProxyCall(recipe));
  })

  context('With param mapping inside a tuple', () => {
    let recipe;

    it('Constructor', () => {
      recipe = new dfs.Recipe(
        'MockTest',
        [
          new dfs.Action('MockDeposit', '0x0', ['uint256', 'uint256', 'uint256'], [123, 0, 456]),
        ],
      );
      const action = new dfs.Action('MockSwap', '0x0', [['uint256', 'uint256'], 'address'], [[1, '$1'], '0x2F0b23f53734252Bda2277357e97e1517d6B042A']);
      action.mappableArgs = [action.args[0][1], action.args[1]];
      recipe.addAction(action);
    })

    it('encodeForDsProxyCall', () => encodeForDsProxyCall(recipe));
  })
})


describe('Recipe composition', () => {
  const AbiCoder = require('web3-eth-abi');
  const owner = '0x0000000000000000000000000000000000000001';
  const otherOwner = '0x0000000000000000000000000000000000000002';

  it('encodes ordered action data, IDs and mappings in the recipe tuple', () => {
    const first = new dfs.Action('MockDeposit', owner, ['uint256'], ['7']);
    const second = new dfs.Action('MockSwap', owner, ['uint256', 'address'], ['$1', otherOwner]);
    const recipe = new dfs.Recipe('Mapped recipe', [first]);
    assert.strictEqual(recipe.addAction(second), recipe);
    const zeroWord = '0'.repeat(64);
    // Expected values are independent of the actions' encoding methods.
    const expected = [
      'Mapped recipe',
      [`0x${'7'.padStart(64, '0')}`, `0x${zeroWord}${'2'.padStart(64, '0')}`],
      [`0x${zeroWord}`, `0x${zeroWord}`],
      ['0xf7012350', '0xe45f86c0'],
      [[0], [1, 0]],
    ];
    const signature = 'executeRecipe((string,bytes[],bytes32[],bytes4[],uint8[][]))';
    const data = AbiCoder.encodeParameter('(string,bytes[],bytes32[],bytes4[],uint8[][])', expected);
    assert.deepEqual(recipe.encodeForDsProxyCall(), [
      dfs.getAddr('RecipeExecutor'),
      AbiCoder.encodeFunctionSignature(signature) + data.slice(2),
    ]);
  });

  it('sums ETH values exactly above JavaScript safe integer precision', async () => {
    const recipe = new dfs.Recipe('ETH value', [
      new dfs.actions.basic.WrapEthAction('1000000000000000000'),
      new dfs.actions.basic.WrapEthAction('1'),
      new dfs.actions.basic.WrapEthAction('99', false),
    ]);
    assert.equal(await recipe.getEthValue(), '1000000000000000001');
    assert.equal(await new dfs.Recipe('Empty').getEthValue(), '0');
  });

  it('deduplicates ERC-20 approvals by asset and owner and excludes native ETH', async () => {
    const weth = getAssetInfo('WETH').address;
    const dai = getAssetInfo('DAI').address;
    const recipe = new dfs.Recipe('Approvals', [
      new dfs.actions.basic.PullTokenAction(weth, owner, '1'),
      new dfs.actions.basic.PullTokenAction(weth, owner, '2'),
      new dfs.actions.basic.PullTokenAction(weth, otherOwner, '3'),
      new dfs.actions.basic.PullTokenAction(dai, owner, '4'),
    ]);
    const nativeAction = new dfs.Action('Native', owner, [], []);
    nativeAction.getAssetsToApprove = async () => [{ asset: getAssetInfo('ETH').address, owner }];
    recipe.addAction(nativeAction);
    assert.deepEqual(await recipe.getAssetsToApprove(), [
      { asset: weth, owner, specialApproveLabel: undefined },
      { asset: weth, owner: otherOwner, specialApproveLabel: undefined },
      { asset: dai, owner, specialApproveLabel: undefined },
    ]);
    assert.deepEqual(await new dfs.Recipe('Empty').getAssetsToApprove(), []);
  });

  it('rejects non-action entries both at construction and when adding an action', () => {
    assert.throws(() => new dfs.Recipe('Invalid', [{}]), TypeError, 'Supplied action does not inherit Action');
    const recipe = new dfs.Recipe('Empty');
    assert.throws(() => recipe.addAction({}), TypeError, 'Supplied action does not inherit Action');
    assert.lengthOf(recipe.actions, 0);
  });
});


describe('Recipe validation and NFT approvals', () => {
  const owner = '0x0000000000000000000000000000000000000001';
  const collectionA = '0x0000000000000000000000000000000000000002';
  const collectionB = '0x0000000000000000000000000000000000000003';

  it('keeps different NFT contracts, token IDs and owners while removing exact duplicates', async () => {
    const approvals = [
      { owner, nft: collectionA, tokenId: '1' },
      { owner, nft: collectionA, tokenId: '1' },
      { owner, nft: collectionB, tokenId: '1' },
      { owner, nft: collectionA, tokenId: '2' },
      { owner: collectionB, nft: collectionA, tokenId: '1' },
    ];
    const actions = approvals.map(approval => {
      const action = new dfs.Action('NFT', owner, [], []);
      action.getAssetsToApprove = async () => [approval];
      return action;
    });
    assert.deepEqual(await new dfs.Recipe('NFT approvals', actions).getAssetsToApprove(),
      [approvals[0], ...approvals.slice(2)].map(approval => ({ ...approval, specialApproveLabel: undefined })));
  });

  it('reports empty recipes clearly for both regular and TxSaver encoding', () => {
    const recipe = new dfs.Recipe('Empty');
    assert.throws(() => recipe.encodeForDsProxyCall(), 'Cannot encode an empty recipe');
    assert.throws(() => recipe.encodeForTxSaverCall({ shouldTakeFeeFromPosition: false }),
      'Cannot encode an empty recipe');
  });
});
