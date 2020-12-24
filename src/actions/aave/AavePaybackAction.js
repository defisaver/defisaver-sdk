const Action = require("../../Action");
const {getAssetInfoByAddress} = require("defisaver-tokens");

/**
 * AavePaybackAction - Payback borrowed tokens from Aave
 */
class AavePaybackAction extends Action {
  /**
   * @param market {String}
   * @param tokenAddr {String}
   * @param amount {String}
   * @param rateMode {Number}
   * @param from {String}
   * @param onBehlaf {String}
   */
  constructor(market, tokenAddr, amount, rateMode, from, onBehlaf) {
    super('AavePayback', '0x0', ['address','address','uint256','uint256','address', 'address'], [...arguments]);
  }

  async getAssetsToApprove() {
    const asset = getAssetInfoByAddress(this.args[1]);
    if (asset !== 'ETH') return [{asset: this.args[1], owner: this.args[4]}];
    return [];
  }

  async getEthValue() {
    const asset = getAssetInfoByAddress(this.args[1]);
    if (asset === 'ETH') return this.args[2];
    return '0';
  }
}

module.exports = AavePaybackAction;
