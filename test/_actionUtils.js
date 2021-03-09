const AbiCoder = require('web3-eth-abi');
const ActionAbi = require('../src/abis/Action.json');
const DsProxyAbi = require('../src/abis/DsProxy.json');

const encodeForDsProxyCall = (action) => {
  const executeAbi = DsProxyAbi.find(({ name }) => name === 'execute');
  AbiCoder.encodeFunctionCall(executeAbi, action.encodeForDsProxyCall());
}

const encodeForRecipe = (action) => {
  action.encodeForRecipe()
}

module.exports = {
  encodeForDsProxyCall,
  encodeForRecipe,
}
