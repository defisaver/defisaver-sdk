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
   * @param startRatioIndex {uint256} Index in returnValues where ratio before actions is stored
   */
  constructor(ratioState, checkTarget, targetRatio, vaultId, startRatioIndex) {
    super("McdRatioCheck", getAddr("McdRatioCheck"), [["uint8","bool","uint256","uint256","uint256"]], [[ratioState, checkTarget, targetRatio, vaultId, startRatioIndex]]);

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][2],
      this.args[0][3],
      this.args[0][4],
    ];
  }

}

module.exports = MakerRatioCheckAction;

