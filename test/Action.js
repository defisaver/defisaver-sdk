const dfs = require('../src');
const {encodeForDsProxyCall, encodeForRecipe} = require('./_actionUtils');
const {assert} = require('chai');

describe('Action', () => {

  context('Basic', () => {
    let action;
    it('Constructor', () => {
      action = new dfs.Action('MockSwap', '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f', ['uint256', 'address'], [5, '0x6b175474e89094c44da98b954eedeac495271d0f'])
    })
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
  });

  context('With tuples', () => {
    let action;
    it('Constructor', () => {
      action = new dfs.Action(
        "DFSSell",
        "0x0a80C3C540eEF99811f4579fa7b1A0617294e06f",
        [
          ["address", "address", "uint256", "uint256", "uint256", "uint256", "address", "address", "bytes", ["address", "address", "uint256", "uint256", "bytes"]],
          "address",
          "address",
        ],
        [
          ['0x6b175474e89094c44da98b954eedeac495271d0f', '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', 1000000000000, 0, 0, 0, '0x0000000000000000000000000000000000000000', '0x6403BD92589F825FfeF6b62177FCe9149947cb9f', '0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000020000000000000000000000006b175474e89094c44da98b954eedeac495271d0f000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', ['0x0000000000000000000000000000000000000000', '0x0000000000000000000000000000000000000000', 0, 0, []]],
          '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
          '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f'
        ]
      );
    })
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
  })

  context('With param mapping', () => {
    let action;
    it('Constructor', () => {
      action = new dfs.Action('MockSwap', '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f', ['uint256', 'address'], ['$1', '0x6b175474e89094c44da98b954eedeac495271d0f']);
      action.mappableArgs = [action.args[0], action.args[1]];
      assert.deepEqual(action.encodeForRecipe()[3], [1, 0]);
    })
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
  })

  context('With param mapping inside a tuple', () => {
    let action;
    it('Constructor', () => {
      action = new dfs.Action('MockSwap', '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f', [['uint256'], 'address'], [['$1'], '0x6b175474e89094c44da98b954eedeac495271d0f']);
    })
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe with incorrect mappableArgs throws', () => {
      assert.throws(() => encodeForRecipe(action));
    });
    it('encodeForRecipe with custom mappableArgs', () => {
      action.mappableArgs = [action.args[0][0], action.args[1]];
      assert.deepEqual(action.encodeForRecipe()[3], [1, 0]);
    });
  })
})


describe('Action encoding', () => {
  const AbiCoder = require('web3-eth-abi');
  const target = '0x0000000000000000000000000000000000000001';
  const recipient = '0x0000000000000000000000000000000000000002';
  const zeroWord = '0'.repeat(64);

  it('encodes the target, selector, arguments, ID and unmapped inputs', () => {
    const action = new dfs.Action('MockSwap', target, ['uint256', 'address'], ['5', recipient]);
    // Static ABI tuple: one word for the amount, one for the address.
    const payload = `0x${'5'.padStart(64, '0')}${'2'.padStart(64, '0')}`;
    assert.deepEqual(action.encodeForRecipe(), [payload, `0x${zeroWord}`, '0xe45f86c0', [0, 0]]);
    const [address, data] = action.encodeForDsProxyCall();
    assert.equal(address, target);
    assert.equal(data.slice(0, 10), '0x389f87ff'); // executeActionDirect(bytes)
    assert.equal(AbiCoder.decodeParameter('bytes', `0x${data.slice(10)}`), payload);
  });

  it('replaces mapped inputs with zeros without changing the original arguments', () => {
    const args = ['$2', recipient];
    const action = new dfs.Action('MockSwap', target, ['uint256', 'address'], args);
    const [payload, , , mapping] = action.encodeForRecipe();
    assert.equal(payload, `0x${zeroWord}${'2'.padStart(64, '0')}`);
    assert.deepEqual(mapping, [2, 0]);
    assert.deepEqual(args, ['$2', recipient]);
  });

  it('preserves nested tuple and array values around mapped inputs', () => {
    const args = [['7', ['$1', recipient]], ['11', '13']];
    const action = new dfs.Action('MockSwap', target,
      [['uint256', ['uint256', 'address']], 'uint256[]'], args);
    action.mappableArgs = [args[0][1][0], args[0][1][1]];
    const [payload, , , mapping] = action.encodeForRecipe();
    const decoded = AbiCoder.decodeParameter('((uint256,(uint256,address)),uint256[])', payload);
    assert.equal(decoded[0][0], '7');
    assert.equal(decoded[0][1][0], '0');
    assert.equal(decoded[0][1][1], recipient);
    assert.deepEqual(decoded[1], ['11', '13']);
    assert.deepEqual(mapping, [1, 0]);
    assert.equal(args[0][1][0], '$1');
  });

  it('maps strategy slots and special wallet references', () => {
    const action = new dfs.Action('MockSwap', target,
      ['uint256', 'uint256', 'address', 'address', 'uint256'],
      ['$1', '&amount', '&proxy', '&eoa', '9']);
    assert.deepEqual(action.encodeForStrategy({ '&amount': { index: 128 } }),
      ['0xe45f86c0', [1, 128, 254, 255, 0]]);
  });

  it('rejects mismatched argument counts', () => {
    assert.throws(() => new dfs.Action('MockSwap', target, ['uint256'], []),
      'Parameters/arguments length mismatch');
  });
});


describe('Action reference validation', () => {
  const target = '0x0000000000000000000000000000000000000001';

  for (const reference of ['$0', '$1junk', 'prefix$1', '$1.5', '$9007199254740992']) {
    it(`rejects malformed reference ${reference} in every encoding path`, () => {
      const action = new dfs.Action('MockSwap', target, ['uint256'], [reference]);
      for (const encode of [
        () => action.encodeForDsProxyCall(),
        () => action.encodeForRecipe(),
        () => action.encodeForStrategy({}),
      ]) {
        assert.throws(encode, `Invalid action return reference: ${reference}`);
      }
    });
  }

  it('preserves existing leading-zero references and ordinary strings', () => {
    const action = new dfs.Action('MockSwap', target, ['uint256', 'string'], ['$01', '$price']);
    assert.deepEqual(action.encodeForRecipe()[3], [1, 0]);
  });
});
