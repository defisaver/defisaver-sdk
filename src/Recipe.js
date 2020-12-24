const AbiCoder = require('web3-eth-abi');

const Action = require('./Action');
const RecipeAbi = require('./abis/Recipe.json');

/**
 * Set of Actions to be performed sequentially in a single transaction
 */
class Recipe {
  /**
   * @param name {String}
   * @param actions {Array<Action>}
   */
  constructor(name, actions = []) {
    actions.forEach((action) => {
      if (!action instanceof Action) throw new TypeError('Supplied action does not inherit Action');
    });

    this.name = name;
    this.actions = actions;
    this.taskExecutorAddress = '0xb487e3829c510960d3f98983431227d4a05a3ac9';
  }

  /**
   * @param action {Action}
   * @returns {Recipe}
   */
  addAction(action) {
    if (!action instanceof Action) throw new TypeError('Supplied action does not inherit Action');
    this.actions.push(action);
    return this;
  }

  /**
   * Encode arguments for calling the action set directly
   * You most likely don't want to use this directly.
   * Instead, you probably want to use `encodeForDsProxyCall`
   * @returns {Array<String|Array<*>>}
   */
  encodeForCall() {
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
   * @returns {Array<String>} `address` & `data` to be passed on to DSProxy's `execute(address _target, bytes memory _data)`
   */
  encodeForDsProxyCall() {
    const executeTaskAbi = RecipeAbi.find(({name}) => name === 'executeTask');
    return [
      this.taskExecutorAddress,
      AbiCoder.encodeFunctionCall(executeTaskAbi, this.encodeForCall()),
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
}

module.exports = Recipe;
