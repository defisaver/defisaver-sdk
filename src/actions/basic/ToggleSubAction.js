const Action = require("../../Action");
const {getAddr} = require("../../addresses.js");

/**
 *  Sets the state of the sub to active or deactivated
 */
class ToggleSubAction extends Action {
  /**
   * @param subId Id of the subscription in the SubStorage contract
   * @param active Set to true to activate action, to false to deactivate
   */
  constructor(subId, active) {
    super("ToggleSub", getAddr("ToggleSub"), ["uint256", "bool"], [...arguments]);

  }

}

module.exports = ToggleSubAction;
