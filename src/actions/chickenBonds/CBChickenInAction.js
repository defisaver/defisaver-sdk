const Action = require("../../Action");
const { requireAddress } = require("../../utils/general");
const { getAddr } = require('../../addresses.js');

/**
 * CBCreateAction - Chickens in the pending bond
 */
class CBChickenInAction extends Action {
  /**
   * @param bondID {string} Nft id of the bond
   * @param to {EthAddress}
   */
  constructor(bondId, to) {
    requireAddress(to);
    super('CBChickenIn', getAddr('CBChickenIn'), ['uint256','address'], [...arguments]);
  }
}

module.exports = CBChickenInAction;