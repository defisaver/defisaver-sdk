const Action = require("../../Action");
const { tokenFromJoin, getAssetInfo } = require('defisaver-tokens');

/**
 * MakerSupplyAction - Supply token to a Vault
 */
class MakerSupplyAction extends Action {
  /**
   * @param vaultId {String}
   * @param amount {String}
   * @param joinAddr {String}
   * @param from {String}
   * @param mcdManager {String}
   */
  constructor(vaultId, amount, joinAddr, from, mcdManager) {
    super('McdSupply', '0x0bCF4f9325D89DC504585D44BB819Df4b153Abf6', ['uint256','uint256','address','address','address'], [...arguments]);
  }

  async getAssetsToApprove() {
    const asset = tokenFromJoin(this.args[2]);
    if (asset !== 'ETH') return [{asset: getAssetInfo(asset).address, owner: this.args[3]}];
    return [];
  }

  async getEthValue() {
    const asset = tokenFromJoin(this.args[2]);
    if (asset === 'ETH') return this.args[1];
    return '0';
  }
}

module.exports = MakerSupplyAction;
