const AbiCoder = require('web3-eth-abi');
const RecipeAbi = require('../src/abis/Recipe.json');
const DsProxyAbi = require('../src/abis/DsProxy.json');

const encodeForDsProxyCall = (action) => {
  const executeAbi = DsProxyAbi.find(({ name }) => name === 'execute');
  AbiCoder.encodeFunctionCall(executeAbi, action.encodeForDsProxyCall());
}

module.exports = {
  encodeForDsProxyCall,
}
