const Action = require("../../Action");
const { requireAddress } = require("../../utils/general");
const { getAddr } = require('../../addresses.js');

/**
 * CBChickenOutAction - Chickens out the pending bond
 */
class CBChickenOutAction extends Action {
  /**
   * @param bondID {string} Nft id of the bond
   * @param minLUSD {string} Min amount of lusd to receive
   * @param to {EthAddress}
   */
  constructor(bondId, minLUSD, to) {
    requireAddress(to);
    super('CBChickenOut', getAddr('CBChickenOut'), ['uint256','uint256','address'], [...arguments]);
  }
}

module.exports = CBChickenOutAction;