const Action = require("../../Action");
const {getAssetInfoByAddress} = require("defisaver-tokens");

/**
 * CompoundSupplyAction - Supply token to an Compound position
 */
class CompoundSupplyAction extends Action {
  /**
   * @param tokenAddr {String}
   * @param amount {String}
   * @param from {String}
   */
  constructor(tokenAddr, amount, from) {
    super('CompSupply', '0x0', ['address','uint256','address'], [...arguments]);
  }

  async getAssetsToApprove() {
    const asset = getAssetInfoByAddress(this.args[0]);
    if (asset !== 'ETH') return [{asset: this.args[0], owner: this.args[2]}];
    return [];
  }

  async getEthValue() {
    const asset = getAssetInfoByAddress(this.args[0]);
    if (asset === 'ETH') return this.args[1];
    return '0';
  }
}

module.exports = CompoundSupplyAction;
