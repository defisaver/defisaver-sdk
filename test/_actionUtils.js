const AbiCoder = require('web3-eth-abi');
const ActionAbi = require('../src/abis/Action.json');
const DsProxyAbi = require('../src/abis/DsProxy.json');

const encodeForCall = (action) => {
  const executeActionDirectAbi = ActionAbi.find(({ name }) => name === 'executeActionDirect');
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
