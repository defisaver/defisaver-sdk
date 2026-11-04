const { assert } = require('chai');
const AbiCoder = require('web3-eth-abi');
const dfs = require('../../../src');

const fl = dfs.actions.flashloan;
const { FLSource } = fl;
const { networks } = dfs;
const token = '0x0000000000000000000000000000000000000001';
const zero = '0x0000000000000000000000000000000000000000';
const allSources = Object.values(FLSource).filter(source => typeof source === 'number' && source !== FLSource.EMPTY);
const providers = new Map([
  [FLSource.AAVEV2, () => new fl.AaveV2FlashLoanAction([token], ['1000'], ['0'], zero)],
  [FLSource.BALANCER, () => new fl.BalancerFlashLoanAction([token], ['1000'])],
  [FLSource.GHO, () => new fl.GhoFlashLoanAction('1000')],
  [FLSource.MAKER, () => new fl.MakerFlashLoanAction('1000')],
  [FLSource.AAVEV3, () => new fl.AaveV3FlashLoanAction([token], ['1000'], ['0'], zero)],
  [FLSource.UNIV3, () => new fl.UniV3FlashLoanAction(token, token, token, '1000', '0')],
  [FLSource.SPARK, () => new fl.SparkFlashLoanAction([token], ['1000'], ['0'], zero)],
  [FLSource.MORPHO_BLUE, () => new fl.MorphoBlueFlashLoanAction(token, '1000')],
  [FLSource.CURVEUSD, () => new fl.CurveUsdFlashLoanAction('1000')],
  [FLSource.BALANCER_V3, () => new fl.BalancerV3FlashLoanAction([token], ['1000'])],
]);
const supported = new Map([
  [networks.ethereum, allSources],
  [networks.optimism, [FLSource.BALANCER, FLSource.AAVEV3, FLSource.UNIV3, FLSource.BALANCER_V3]],
  [networks.arbitrum, [FLSource.BALANCER, FLSource.AAVEV3, FLSource.UNIV3, FLSource.MORPHO_BLUE, FLSource.BALANCER_V3]],
  [networks.base, [FLSource.BALANCER, FLSource.AAVEV3, FLSource.UNIV3, FLSource.MORPHO_BLUE, FLSource.BALANCER_V3]],
  [networks.linea, [FLSource.AAVEV3]],
  [networks.plasma, [FLSource.AAVEV3, FLSource.BALANCER_V3]],
]);

describe('Unified flashloans', () => {
  let previous;
  beforeEach(() => { previous = { ...dfs.CONFIG }; });
  afterEach(() => { dfs.configure(previous); });

  it('covers every flashloan source and network', () => {
    assert.sameMembers([...providers.keys()], allSources);
    assert.sameMembers([...supported.keys()], Object.values(networks));
  });

  for (const [network, sources] of supported) {
    it(`validates all sources and preserves wrapped encoding on ${network.chainName}`, () => {
      dfs.configure({ chainId: network.chainId });
      providers.forEach((create, source) => {
        const context = `${FLSource[source]} on ${network.chainName}`;
        assert.equal(fl.isFlashLoanSourceSupported(source), sources.includes(source), context);
        if (!sources.includes(source)) {
          assert.throws(create, 'is not supported by FLAction');
          return;
        }
        const action = create();
        assert.instanceOf(action, fl.FLAction);
        assert.equal(action.name, 'FLAction');
        assert.equal(action.encodeForDsProxyCall()[0], dfs.actionAddresses().FLAction);
        assert.deepEqual(new fl.FLAction(action).encodeForRecipe(), action.encodeForRecipe());
        const decoded = AbiCoder.decodeParameter('(address[],uint256[],uint256[],address,address,bytes,bytes)', action.encodeForRecipe()[0]);
        assert.equal(decoded[5], `0x${source.toString(16).padStart(2, '0')}`, context);
        const [, recipient] = new fl.FLPaybackAction('$1', token).args;
        assert.equal(recipient, dfs.actionAddresses().FLAction);
      });
      const carry = new fl.AaveV3FlashLoanCarryDebtAction([token], ['1000']);
      assert.equal(carry.contractAddress, dfs.actionAddresses().FLAaveV3CarryDebt);
      assert.notEqual(carry.contractAddress, dfs.actionAddresses().FLAction);
      assert.deepEqual(Object.keys(dfs.actionAddresses()).filter(name => name.startsWith('FL')).sort(), ['FLAaveV3CarryDebt', 'FLAction']);
    });
  }

  it('rejects empty, unknown and missing sources', () => {
    const unknownSource = Math.max(...allSources) + 1;
    for (const source of [FLSource.EMPTY, unknownSource, -1, undefined, String(FLSource.AAVEV3)]) {
      assert.throws(() => new fl.FLAction({ flashLoanId: source, args: [] }), 'is not supported by FLAction');
    }
    const unknownChainId = Math.max(...Object.values(networks).map(network => network.chainId)) + 1;
    assert.isFalse(fl.isFlashLoanSourceSupported(FLSource.AAVEV3, unknownChainId));
  });
});
