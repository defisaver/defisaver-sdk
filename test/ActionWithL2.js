const dfs = require('../src');
const AbiCoder = require('web3-eth-abi');
const { assert } = require('chai');

const MAXUINT = '115792089237316195423570985008687907853269984665640564039457584007913129639935';
const target = '0x0000000000000000000000000000000000000001';
const recipient = '0x0000000000000000000000000000000000000002';

describe('ActionWithL2', () => {
  it('packs integer boundaries, addresses and booleans to their specified widths', () => {
    const action = new dfs.ActionWithL2('MockSwap', target, [], []);
    for (const [value, expected] of [[0, '00'], [1, '01'], [255, 'ff']]) {
      assert.equal(action.numberToBytes1(value), expected);
    }
    for (const [value, expected] of [[0, '0000'], [1, '0001'], [65535, 'ffff']]) {
      assert.equal(action.numberToBytes2(value), expected);
    }
    assert.equal(action.numberToBytes32('0'), '0'.repeat(64));
    assert.equal(action.numberToBytes32('1'), '1'.padStart(64, '0'));
    assert.equal(action.numberToBytes32(MAXUINT), 'f'.repeat(64));
    assert.equal(action.addressToBytes20(recipient), '2'.padStart(40, '0'));
    assert.equal(action.boolToBytes1(false), '00');
    assert.equal(action.boolToBytes1(true), '01');
  });

  it('falls back to standard ABI encoding when packed encoding is not overridden', () => {
    const action = new dfs.ActionWithL2('MockSwap', target, ['uint256'], ['5']);
    const data = action.encodeForL2DsProxyCall();
    assert.equal(data.slice(0, 10), '0x389f87ff');
    assert.equal(AbiCoder.decodeParameter('bytes', `0x${data.slice(10)}`),
      `0x${'5'.padStart(64, '0')}`);
    assert.equal(action.encodeForL2Recipe(), `0x${data.slice(10)}`);
  });

  for (const useDefaultMarket of [true, false]) {
    it(`encodes Aave withdrawal with ${useDefaultMarket ? 'default' : 'explicit'} market`, () => {
      const action = new dfs.actions.aaveV3.AaveV3WithdrawAction(
        useDefaultMarket, target, MAXUINT, recipient, 9,
      );
      // uint16 asset ID, bool default market, uint256 amount, address recipient,
      // followed by the market address only when not using the default.
      const payload = `0009${useDefaultMarket ? '01' : '00'}${'f'.repeat(64)}${recipient.slice(2)}${useDefaultMarket ? '' : target.slice(2)}`;
      assert.equal(action.encodeForL2DsProxyCall(), `0x2895f3aa${payload}`);
      assert.equal(action.encodeForL2Recipe(), `0x${payload}`);

      const previous = { ...dfs.CONFIG };
      try {
        dfs.configure({ chainId: 10, testingMode: false });
        assert.deepEqual(action.encodeForDsProxyCall(), [action.contractAddress, `0x2895f3aa${payload}`]);
      } finally {
        dfs.configure(previous);
      }
    });
  }
});


describe('ActionWithL2 integer validation', () => {
  const action = new dfs.ActionWithL2('MockSwap', target, [], []);

  for (const [method, overflow] of [['numberToBytes1', 256], ['numberToBytes2', 65536]]) {
    it(`${method} rejects overflow, negative, fractional and non-finite values`, () => {
      for (const value of [overflow, -1, 1.5, NaN, Infinity]) {
        assert.throws(() => action[method](value), RangeError, 'Value must fit');
      }
    });
  }

  it('preserves hex text accepted by existing JavaScript callers', () => {
    assert.equal(action.numberToBytes1('10'), '10');
    assert.equal(action.numberToBytes2('10'), '0010');
  });
});
