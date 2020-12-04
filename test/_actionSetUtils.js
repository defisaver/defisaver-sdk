const AbiCoder = require('web3-eth-abi');
const ActionSetAbi = require('../src/abis/ActionSet.json');
const DsProxyAbi = require('../src/abis/DsProxy.json');

const encodeForCall = (action) => {
  const executeActionDirectAbi = ActionSetAbi.find(({ name }) => name === 'executeTask');
  AbiCoder.encodeFunctionCall(executeActionDirectAbi, action.encodeForCall());
}

const encodeForDsProxyCall = (action) => {
  const executeAbi = DsProxyAbi.find(({ name }) => name === 'execute');
  AbiCoder.encodeFunctionCall(executeAbi, action.encodeForDsProxyCall());
}

const encodeForActionSet = (action) => {
  action.encodeForActionSet()
}

module.exports = {
  encodeForCall,
  encodeForDsProxyCall,
  encodeForActionSet,
}
