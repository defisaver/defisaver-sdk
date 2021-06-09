const Action = require("../../Action");
const {getAddr} = require("../../addresses.js");

class GasFeeAction extends Action {
  /**
   * @param gasStart {string} Always 0 will be inject value
   * @param feeToken {string} Address of the token we are taken the fee in
   * @param availableAmount Amount we have available to pay the gas fee
   */
  constructor(gasStart, feeToken, availableAmount) {
    super("GasFeeTaker", getAddr("GasFeeTaker"), [["uint256","address","uint256"]], [[...arguments]]);

    this.mappableArgs = [
      this.args[0][1],
      this.args[0][2],
    ];
  }

}

module.exports = GasFeeAction;
