const Action = require("../../Action");
const {getAddr} = require("../../addresses.js");

/**
 * CompoundV3RatioCheckAction - Checks comp V3 ratio for user position and reverts if faulty
 */
class CompoundV3RatioCheckAction extends Action {
  /**
   * @param ratioState {uint8} If it should lower/higher
   * @param targetRatio {string} The ratio user want to be at
   * @param market {address} Address of compV3 market
   * @param user {address} Address of the user we are checking the ratio for (default to proxy)
   */
  constructor(ratioState, targetRatio, market, user) {
    super("CompV3RatioCheck", getAddr("CompV3RatioCheck"), ["uint8","uint256","address","address"], [ratioState, targetRatio, market, user]);

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3]
    ];
  }

}

module.exports = CompoundV3RatioCheckAction;