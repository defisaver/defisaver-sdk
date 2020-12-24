const dfs = require('../index.js');
const {encodeForCall, encodeForDsProxyCall} = require('./_recipeUtils');

describe('Recipe', () => {

  context('Basic', () => {
    let set;

    it('Constructor', () => {
      set = new dfs.Recipe(
        'MockTest',
        [
          new dfs.actions.maker.MakerOpenVaultAction('0x2F0b23f53734252Bda2277357e97e1517d6B042A', '0x5ef30b9986345249bc32d8928B7ee64DE9435E39'),
          new dfs.Action('MockSwap', '0x0', ['uint256', 'address'], [5, '0x2F0b23f53734252Bda2277357e97e1517d6B042A']),
          new dfs.Action('MockDeposit', '0x0', ['uint256', 'uint256', 'uint256'], [123, 0, 456]),
        ],
      );
    })

    it('encodeForCall', () => encodeForCall(set));
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(set));
  });

  context('With basic param mapping', () => {
    let set;

    it('Constructor', () => {
      set = new dfs.Recipe(
        'MockTest',
        [
          new dfs.Action('MockDeposit', '0x0', ['uint256', 'uint256', 'uint256'], [123, 0, 456]),
          new dfs.Action('MockSwap', '0x0', ['uint256', 'address'], ['$1', '0x2F0b23f53734252Bda2277357e97e1517d6B042A']),
        ],
      );
    })

    it('encodeForCall', () => encodeForCall(set));
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(set));
  })

  context('With param mapping inside a tupple', () => {
    let set;

    it('Constructor', () => {
      set = new dfs.Recipe(
        'MockTest',
        [
          new dfs.Action('MockDeposit', '0x0', ['uint256', 'uint256', 'uint256'], [123, 0, 456]),
        ],
      );
      const action = new dfs.Action('MockSwap', '0x0', [['uint256', 'uint256'], 'address'], [[1, '$1'], '0x2F0b23f53734252Bda2277357e97e1517d6B042A']);
      action.mappableArgs = [action.args[0][1], action.args[1]];
      set.addAction(action);
    })

    it('encodeForCall', () => encodeForCall(set));
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(set));
  })
})
