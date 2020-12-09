const AbiCoder = require('web3-eth-abi');

const Action = require('./Action');
const ActionSetAbi = require('./abis/ActionSet.json');

/**
 * Set of Actions to be performed sequentially in a single transaction
 */
class ActionSet {
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
    this.taskExecutorAddress = '0xdeadbeeddeadbeeddeadbeeddeadbeeddeadbeed';
  }

  /**
   * @param action {Action}
   * @returns {ActionSet}
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
    const encoded = this.actions.map(action => action.encodeForActionSet());
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
    const executeTaskAbi = ActionSetAbi.find(({name}) => name === 'executeTask');
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

  async afterValues() {
    let recipeBalance = {};
    const returnValues = [];
    for (const action of recipe.actions) {
      const res = await action.getAfterValues(recipeBalance, returnValues);
      recipeBalance = res.recipeBalance;
      returnValues.push(res.returnValue);
    }
    return {recipeBalance, returnValues};
  }
}

module.exports = ActionSet;
