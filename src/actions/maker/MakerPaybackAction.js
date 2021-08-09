const Action = require("../../Action");
const { getAssetInfo } = require("@defisaver/tokens");

const { getAddr } = require('../../addresses.js');

/**
 * MakerPaybackAction - Payback dai to a Vault
 */
class MakerPaybackAction extends Action {
  /**
   * @param vaultId {VaultId}
   * @param amount {string}
   * @param from {EthAddress} DAI will be sent from this address
   * @param mcdManager {EthAddress}
   */
  constructor(vaultId, amount, from, mcdManager = getAddr('McdCdpManager')) {
    super('McdPayback', getAddr('McdPayback'), [['uint256','uint256','address','address']], [[vaultId, amount, from, mcdManager]]);

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
      this.args[0][2],
    ];
  }

  async getAssetsToApprove() {
    return [{asset: getAssetInfo('DAI').address, owner: this.args[0][2]}];
  }
}

module.exports = MakerPaybackAction;
