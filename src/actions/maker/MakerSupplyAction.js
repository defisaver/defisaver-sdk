const Action = require("../../Action");
const { tokenFromJoin, getAssetInfo } = require("@defisaver/tokens");

const { getAddr } = require('../../addresses.js');

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
    super('McdSupply', getAddr('McdSupply'), ['uint256','uint256','address','address','address'], [...arguments]);
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
