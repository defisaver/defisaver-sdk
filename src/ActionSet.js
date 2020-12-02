const AbiCoder = require('web3-eth-abi');

const ActionSetAbi = require('./abis/ActionSet.json');

/**
 * Set of Actions to be performed sequentially in a single transaction
 * @private
 */
class ActionSet {
  /**
   * @param name {String}
   * @param actions {Array<Action>}
   */
  constructor(name, actions = []) {
    this.name = name;
    this.actions = actions;
    this.taskExecutorAddress = '0xdeadbeeddeadbeeddeadbeeddeadbeeddeadbeed';
  }

  /**
   * @param action {Action}
   */
  addAction(action) {
    this.actions.push(action);
  }

  /**
   * @returns {Array<Array<*>>}
   */
  encodeForCall() {
    const encoded = this.actions.map(action => action.encodeForActionSet());
    const transposed = encoded[0].map((_, colIndex) => encoded.map(row => row[colIndex]));
    const taskStruct = [
      this.name,
      ...transposed,
    ];
    return [taskStruct]
  }

  /**
   * @returns {Array<Array<*>>}
   */
  encodeForDsProxyCall() {
    const executeTaskAbi = ActionSetAbi.find(({name}) => name === 'executeTask');
    return [
      this.taskExecutorAddress,
      AbiCoder.encodeFunctionCall(executeTaskAbi, this.encodeForCall()),
    ];
  }

  _validateParamMappings() {
    this.actions.forEach((action, i) => {
      action.getArgumentMapping().forEach((source, j) => {
        if (source) console.log(`${this.actions[i].name} takes argument #${j + 1} from ${this.actions[source - 1].name} (action #${source})`);
      })
    });
  }
}

module.exports = ActionSet;
