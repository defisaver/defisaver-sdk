const Action = require("../../Action");
const { getAssetInfo } = require('defisaver-tokens');

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
    super('McdPayback', '0xC94D840A5eA787Ea796436BF7aba06e54EBc8138', ['uint256','uint256','address','address'], [...arguments]);
  }

  async getAssetsToApprove() {
    return [{asset: getAssetInfo('DAI').address, owner: this.args[3]}];
  }
}

module.exports = MakerPaybackAction;
