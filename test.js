const dfs = require('./index.js');

const openMyVault = new dfs.actions.maker.MakerOpenVaultAction('0x2F0b23f53734252Bda2277357e97e1517d6B042A');

console.log(openMyVault);
console.log(openMyVault.encodeForCall());

const mockSet = new dfs.ActionSet(
  'MockTest',
  [
    new dfs.actions.maker.MakerOpenVaultAction('0x2F0b23f53734252Bda2277357e97e1517d6B042A'),
    new dfs.Action('MockSwap', '0x0', ['unit256', 'address'], [5, '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee']),
    new dfs.Action('MockDeposit', '0x0', ['unit256', 'unit256', 'unit256'], [123, '$2', 456]),
  ],
)
console.log(mockSet);
console.log(mockSet._validateParamMappings());
