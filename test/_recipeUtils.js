const AbiCoder = require('web3-eth-abi');
const RecipeAbi = require('../src/abis/Recipe.json');
const DsProxyAbi = require('../src/abis/DsProxy.json');

const encodeForCall = (action) => {
  const executeActionDirectAbi = RecipeAbi.find(({ name }) => name === 'executeTask');
  AbiCoder.encodeFunctionCall(executeActionDirectAbi, action.encodeForCall());
}

const encodeForDsProxyCall = (action) => {
  const executeAbi = DsProxyAbi.find(({ name }) => name === 'execute');
  AbiCoder.encodeFunctionCall(executeAbi, action.encodeForDsProxyCall());
}

const encodeForRecipe = (action) => {
  action.encodeForRecipe()
}

module.exports = {
  encodeForCall,
  encodeForDsProxyCall,
  encodeForRecipe,
}
