const Action = require("../../Action");
const {getAssetInfoByAddress} = require("@defisaver/tokens");
const { getAddr } = require('../../addresses.js');

/**
 * AavePaybackActionV1 - Pay back borrowed tokens from AaveV1
 */
class AaveV1PaybackAction extends Action {
  /**
   * @param tokenAddr {EthAddress}
   * @param amount {string}
   * @param from {EthAddress} Tokens will be sent from this address
   * @param onBehalf {EthAddress}
   */
  constructor(tokenAddr, amount, from, onBehalf = getAddr('Empty')) {
    super('AavePaybackV1', getAddr('AavePaybackV1'), ['address','uint256','address', 'address'], [tokenAddr, amount, from, onBehalf]);
  }

  async getAssetsToApprove() {
    const asset = getAssetInfoByAddress(this.args[0]);
    if (asset.symbol !== 'ETH') return [{asset: this.args[0], owner: this.args[2]}];
    return [];
  }

  async getEthValue() {
    const asset = getAssetInfoByAddress(this.args[0]);
    if (asset.symbol === 'ETH') return this.args[1];
    return '0';
  }
}

module.exports = AaveV1PaybackAction;
