const Action = require("../../Action");
const {getAddr} = require("../../addresses.js");

/**
 *
 */
class MakerRatioCheckAction extends Action {
  /**
   * @param targetRatio {string} The ratio user want to be at
   * @param vaultId {string} Id of the vault
   * @param nextPrice {string} Next maker oracle price if needed
   */
  constructor(targetRatio, vaultId, nextPrice) {
    super("McdRatioCheck", getAddr("McdRatioCheck"), [["uint256", "uint256", "uint256"]], [[...arguments]]);

    this.mappableArgs = [
      this.args[0][1],
      this.args[0][2],
      this.args[0][3],
    ];
  }

}

module.exports = MakerRatioCheckAction;
