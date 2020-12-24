const Action = require("../../Action");
const {getAssetInfoByAddress} = require("defisaver-tokens");

/**
 * AaveSupplyAction - Supply token to an aave position
 */
class AaveSupplyAction extends Action {
  /**
   * @param market {String}
   * @param tokenAddr {String}
   * @param amount {String}
   * @param from {String}
   */
  constructor(market, tokenAddr, amount, from) {
    super('AaveSupply', '0x0', ['address','address','uint256','address'], [...arguments]);
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
