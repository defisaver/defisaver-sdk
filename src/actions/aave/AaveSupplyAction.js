const Action = require("../../Action");
const {getAssetInfoByAddress} = require("@defisaver/tokens");
const { getAddr } = require('../../addresses.js');

/**
 * AaveSupplyAction - Supply token to an aave position
 */
class AaveSupplyAction extends Action {
  /**
   * @param market {String}
   * @param tokenAddr {String}
   * @param amount {String}
   * @param from {String}
   * @param onBehlaf {String}
   */
  constructor(market, tokenAddr, amount, from, onBehlaf) {
    super('AaveSupply', getAddr('AaveSupply'), ['address','address','uint256','address','address'], [...arguments]);
  }

  async getAssetsToApprove() {
    const asset = getAssetInfoByAddress(this.args[1]);
    if (asset !== 'ETH') return [{asset: this.args[1], owner: this.args[3]}];
    return [];
  }

  async getEthValue() {
    const asset = getAssetInfoByAddress(this.args[1]);
    if (asset === 'ETH') return this.args[2];
    return '0';
  }
}

module.exports = AaveSupplyAction;
