const Action = require("../../Action");
const {getAddr} = require("../../addresses.js");

class GasFeeAction extends Action {
  /**
   * @param gasStart {string} Always 0 will be inject value
   * @param feeToken {string} Address of the token we are taken the fee in
   * @param payNow {bool} If the action will pay gas cost from DSProxy now or later
   */
  constructor(gasStart, feeToken, payNow) {
    super("GasFeeTaker", getAddr("GasFeeTaker"), ["uint256","address","bool"], [...arguments]);
  }

}

module.exports = GasFeeAction;
