const dfs = require('../index.js');
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
      assert.lengthOf(assetsToApprove, 0);
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
