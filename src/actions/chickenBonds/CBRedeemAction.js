const Action = require("../../Action");
const { requireAddress } = require("../../utils/general");
const { getAddr } = require('../../addresses.js');

/**
 * CBRedeemAction - Redeems bLUSD for Lusd (might also get yTokens)
 */
class CBRedeemAction extends Action {
  /**
   * @param bLUSDAmount {string} Amount of bLUSD
   * @param minLUSDFromSP {string} Min amount of lusd to receive
   * @param from {EthAddress}
   * @param to {EthAddress}
   */
  constructor(bLUSDAmount, minLUSDFromSP, from, to) {
    requireAddress(from);
    requireAddress(to);
    super('CBRedeem', getAddr('CBRedeem'), ['uint256','uint256','address','address'], [...arguments]);
  }

  async getAssetsToApprove() {
    return [{asset: getAddr('BLUSD'), owner: this.args[2]}]
  }

}

module.exports = CBRedeemAction;