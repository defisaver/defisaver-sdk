const Action = require("../../Action");
const {getAddr} = require("../../addresses.js");

/**
 * AaveV3RatioCheckAction - Checks aave V3 ratio for users proxy position and reverts if faulty
 */
class AaveV3RatioCheckAction extends Action {
  /**
   * @param ratioState {uint8} If it should lower/higher
   * @param targetRatio {string} The ratio user want to be at
   */
  constructor(ratioState, targetRatio) {
    super("AaveV3RatioCheck", getAddr("AaveV3RatioCheck"), ["uint8","uint256"], [ratioState, targetRatio]);

    this.mappableArgs = [
      this.args[0],
      this.args[1],
    ];
  }

}

module.exports = AaveV3RatioCheckAction;

