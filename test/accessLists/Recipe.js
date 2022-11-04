const AbiCoder = require('web3-eth-abi');
const { BN, padLeft, toHex } = require('web3-utils');
const {getAssetInfo, utils: {compare}} = require("@defisaver/tokens");
const RecipeAbi = require('../../src/abis/Recipe.json');
const MockAccessLists = require('./MockAccessLists');
const dfs = require("../../umd");

/**
 * Set of Actions to be performed sequentially in a single transaction
 */
class Recipe {
  /**
   * @param name {string}
   * @param actions {Array<Action>}
   */
  constructor(name, actions = []) {
    actions.forEach((action) => {
      if (!action instanceof dfs.Action) throw new TypeError('Supplied action does not inherit Action');
    });

    this.name = name;
    this.actions = actions;
    this.recipeExecutorAddress = dfs.getAddr('RecipeExecutor');
  }

  /**
   * @param action {Action}
   * @returns {Recipe}
   */
  addAction(action) {
    if (!action instanceof dfs.Action) throw new TypeError('Supplied action does not inherit Action');
    this.actions.push(action);
    return this;
  }

  /**
   * Encode arguments for calling the action set directly
   * @returns {Array<string|Array<*>>}
   * @private
   */
  _encodeForCall() {
    const encoded = this.actions.map(action => action.encodeForRecipe());
    const transposed = encoded[0].map((_, colIndex) => encoded.map(row => row[colIndex]));
    const taskStruct = [
      this.name,
      ...transposed,
    ];
    return [taskStruct];
  }

  /**
   * Encode arguments for calling the action set via DsProxy
   * @returns {Array<string>} `address` & `data` to be passed on to DSProxy's `execute(address _target, bytes memory _data)`
   */
  encodeForDsProxyCall() {
    const executeTaskAbi = RecipeAbi.find(({name}) => name === 'executeTask');
    return [
      this.recipeExecutorAddress,
      AbiCoder.encodeFunctionCall(executeTaskAbi, this._encodeForCall()),
    ];
  }

  /**
   * Logs parameter mapping in verbose format for validation. Used for testing in development.
   */
  _validateParamMappings() {
    this.actions.forEach((action, i) => {
      action.getArgumentMapping().forEach((source, j) => {
        if (source) console.log(`${this.actions[i].name} takes argument #${j + 1} from ${this.actions[source - 1].name} (action #${source})`);
      })
    });
  }

  /**
   * Assets requiring approval to be used by DsProxy
   * Approval is done from owner to DsProxy
   * @returns {Promise<Array<{owner: string, asset: string}>>}
   */
  async getAssetsToApprove() {
    const uniqueAssetOwnerPairs = [];
    const assetOwnerPairs = await Promise.all(this.actions.map(a => a.getAssetsToApprove()));
    for (const pairsPerAction of assetOwnerPairs) {
      for (const pair of pairsPerAction) {
        const isNft = !pair.asset;
        if (!uniqueAssetOwnerPairs.find(_pair => _pair.owner === pair.owner && (isNft ? _pair.tokenId === pair.tokenId : _pair.asset === pair.asset))) {
          uniqueAssetOwnerPairs.push(pair);
        }
      }
    }
    return uniqueAssetOwnerPairs.filter(({ address }) => !compare(address, getAssetInfo('ETH').address));
  }

  /**
   * ETH value to be sent with transaction
   * @returns {Promise<string>} ETH value in wei
   */
  async getEthValue() {
    return (await Promise.all(this.actions.map(a => a.getEthValue())))
      .reduce((acc, val) => acc.add(new BN(val)), new BN(0))
      .toString();
  }

  /**
   * Generates an access list for the recipe
   * @returns {AccessList}
   */
  getAccessList() {
    const addressMapping = {
      [dfs.getAddr('RecipeExecutor')]: [],
      [dfs.getAddr('DFSRegistry')]: [],
    };
    this.actions.forEach((action) => {
      const accessList = MockAccessLists[action.name].map(([address, storageKeys]) => ({ address, storageKeys: storageKeys.map(num => padLeft(toHex(num), 64)) }));
      accessList.forEach(({ address, storageKeys }) => {
        addressMapping[address] = new Set([...storageKeys, ...(addressMapping[address] || [])]);
      })
    });
    return Object.keys(addressMapping).map((address) => ({
      address,
      storageKeys: [...addressMapping[address]],
    }));
  }
}

module.exports = Recipe;
