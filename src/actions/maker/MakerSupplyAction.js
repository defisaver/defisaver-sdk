const Action = require("../../Action");
const { tokenFromJoin, getAssetInfo } = require("@defisaver/tokens");

const { getAddr } = require('../../addresses.js');

/**
 * MakerSupplyAction - Supply token to a Vault
 */
class MakerSupplyAction extends Action {
  /**
   * @param vaultId {VaultId}
   * @param amount {string}
   * @param joinAddr {EthAddress}
   * @param from {EthAddress} Tokens will be supplied from this address
   * @param mcdManager {EthAddress}
   */
  constructor(vaultId, amount, joinAddr, from, mcdManager = getAddr('McdCdpManager')) {
    super('McdSupply', getAddr('McdSupply'), [['uint256','uint256','address','address','address']], [[vaultId, amount, joinAddr, from, mcdManager]]);

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
      this.args[0][2],
      this.args[0][3],
      this.args[0][4],
    ];
  }

  async getAssetsToApprove() {
    const asset = tokenFromJoin(this.args[2]).replace(/^ETH/, 'WETH');
    if (asset !== 'ETH') return [{asset: getAssetInfo(asset).address, owner: this.args[3]}];
    return [];
  }
}

module.exports = MakerSupplyAction;
