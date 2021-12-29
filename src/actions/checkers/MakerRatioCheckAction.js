const Action = require("../../Action");
const {getAddr} = require("../../addresses.js");

/**
 * MakerRatioCheckAction - Checks mcd ratio at end of all actions
 */
class MakerRatioCheckAction extends Action {
  /**
   * @param ratioState {uint8} If it should lower/higher
   * @param checkTarget {}
   * @param targetRatio {string} The ratio user want to be at
   * @param vaultId {string} Id of the vault
   * @param nextPrice {string} Next maker oracle price if needed
   * @param startRatioIndex {uint256} Index in returnValues where ratio before actions is stored
   */
  constructor(ratioState, checkTarget, targetRatio, vaultId, nextPrice, startRatioIndex) {
    super("McdRatioCheck", getAddr("McdRatioCheck"), [["uint8","bool","uint256","uint256","uint256","uint256"]], [[ratioState, checkTarget, targetRatio, vaultId, nextPrice, startRatioIndex]]);

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][2],
      this.args[0][3],
      this.args[0][4],
      this.args[0][5],
    ];
  }

}

module.exports = MakerRatioCheckAction;

