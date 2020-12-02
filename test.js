const dfs = require('./index.js');
const AbiCoder = require('web3-eth-abi');
const Web3Utils = require('web3-utils');
const ActionAbi = require('./src/abis/Action.json');
const ActionSetAbi = require('./src/abis/ActionSet.json');
const DsProxyAbi = require('./src/abis/DsProxy.json');

const openMyVault = new dfs.actions.maker.MakerOpenVaultAction('0x2F0b23f53734252Bda2277357e97e1517d6B042A');

console.log(openMyVault);

openMyVault.encodeForCall();
const executeActionDirectAbi = ActionAbi.find(({ name }) => name === 'executeActionDirect');
AbiCoder.encodeFunctionCall(executeActionDirectAbi, openMyVault.encodeForCall());
console.log('Action.encodeForCall() ✅');

openMyVault.encodeForDsProxyCall();
const executeAbi = DsProxyAbi.find(({ name }) => name === 'execute');
AbiCoder.encodeFunctionCall(executeAbi, openMyVault.encodeForDsProxyCall());
console.log('Action.encodeForDsProxyCall() ✅');

const mockSet = new dfs.ActionSet(
  'MockTest',
  [
    new dfs.actions.maker.MakerOpenVaultAction('0x2F0b23f53734252Bda2277357e97e1517d6B042A'),
    new dfs.Action('MockSwap', '0x0', ['uint256', 'address'], [5, '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee']),
    new dfs.Action('MockDeposit', '0x0', ['uint256', 'uint256', 'uint256'], [123, '$2', 456]),
  ],
)
mockSet.encodeForCall()
const executeTaskAbi = ActionSetAbi.find(({ name }) => name === 'executeTask');
AbiCoder.encodeFunctionCall(executeTaskAbi, mockSet.encodeForCall());
console.log('ActionSet.encodeForCall() ✅');

AbiCoder.encodeFunctionCall(executeAbi, mockSet.encodeForDsProxyCall());
console.log('ActionSet.encodeForDsProxyCall() ✅');

mockSet._validateParamMappings();
console.log('ActionSet._validateParamMappings() ✅');
