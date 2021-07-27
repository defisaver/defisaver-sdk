const Action = require("../../Action");
const {getAddr} = require("../../addresses.js");

/**
 * ChangeProxyOwnerAction - Changes EOA which owns the proxy that is being called
 */
class ChangeProxyOwnerAction extends Action {
  /**
   * @param newOwner {Address} Address of new owner
   */
  constructor(newOwner) {
    super("ChangeProxyOwner", getAddr("ChangeProxyOwner"), [["address"]], [[...arguments]]);

    this.mappableArgs = [this.args[0][0]];
    }
}

module.exports = ChangeProxyOwnerAction;
