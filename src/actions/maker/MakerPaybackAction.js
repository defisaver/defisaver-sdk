const Action = require("../../Action");
const { getAssetInfo } = require("@defisaver/tokens");

const { getAddr } = require('../../addresses.js');

/**
 * MakerPaybackAction - Payback dai to a Vault
 */
class MakerPaybackAction extends Action {
  /**
   * @param vaultId {String}
   * @param amount {String}
   * @param from {String}
   * @param mcdManager {String}
   */
  constructor(vaultId, amount, from, mcdManager) {
    super('McdPayback', getAddr('McdPayback'), ['uint256','uint256','address','address'], [...arguments]);
  }

  async getAssetsToApprove() {
    return [{asset: getAssetInfo('DAI').address, owner: this.args[3]}];
  }
}

module.exports = MakerPaybackAction;
