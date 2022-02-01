const Action = require("../../Action");
const {getAddr} = require("../../addresses.js");

class GasFeeAction extends Action {
  /**
   * @param gasStart {string} Always 0 will be inject value
   * @param feeToken {string} Address of the token we are taken the fee in
   * @param availableAmount Amount we have available to pay the gas fee
   * @param dfsFeeDivider Additional fee for DFS, default is 5bps
   */
  constructor(gasStart, feeToken, availableAmount, dfsFeeDivider = 2000) {
    super("GasFeeTaker",
      getAddr("GasFeeTaker"),
      [["uint256", "address", "uint256", "uint256"]],
      [[gasStart, feeToken, availableAmount, dfsFeeDivider]],
    );

    this.mappableArgs = [
      this.args[0][1],
      this.args[0][2],
      this.args[0][3],
    ];
  }

}

module.exports = GasFeeAction;