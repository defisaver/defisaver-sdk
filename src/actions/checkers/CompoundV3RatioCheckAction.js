const Action = require("../../Action");
const {getAddr} = require("../../addresses.js");

/**
 * CompoundV3RatioCheckAction - Checks aave V3 ratio for users proxy position and reverts if faulty
 */
class CompoundV3RatioCheckAction extends Action {
  /**
   * @param ratioState {uint8} If it should lower/higher
   * @param targetRatio {string} The ratio user want to be at
   * @param market {address} Address of compV3 market
   */
  constructor(ratioState, targetRatio, market) {
    super("CompV3RatioCheck", getAddr("CompV3RatioCheck"), ["uint8","uint256","address"], [ratioState, targetRatio, market]);

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2]
    ];
  }

}

module.exports = CompoundV3RatioCheckAction;