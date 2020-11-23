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
    return encoded[0].map((_, colIndex) => encoded.map(row => row[colIndex]));
  }

  /**
   * TODO
   * @returns {Array<Array<*>>}
   */
  encodeForDsProxyCall() {
    return [];
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
