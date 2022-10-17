const Action = require("../../Action");
const { requireAddress } = require("../../utils/general");
const { getAddr } = require('../../addresses.js');

/**
 * CBCreateAction - Create a chicken bond nft
 */
class CBCreateAction extends Action {
  /**
   * @param amount {string} Wei amount in LUSD
   * @param from {EthAddress}
   */
  constructor(amount, from) {
    requireAddress(from);
    super('CBCreate', getAddr('CBCreate'), ['uint256','address'], [...arguments]);
  }

  async getAssetsToApprove() {
    return [{asset: getAddr('LUSD'), owner: this.args[1]}]
  }
}

module.exports = CBCreateAction;
