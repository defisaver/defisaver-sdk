const Action = require("../../Action");
const {getAssetInfoByAddress} = require("@defisaver/tokens");
const { getAddr } = require('../../addresses.js');

/**
 * CompoundPaybackAction - Payback borrowed tokens from Compound
 */
class CompoundPaybackAction extends Action {
  /**
   * @param cTokenAddr {String}
   * @param amount {String}
   * @param from {String}
   */
  constructor(cTokenAddr, amount, from) {
    super('CompPayback', getAddr('CompPayback'), ['address','uint256','address'], [...arguments]);
  }

  async getAssetsToApprove() {
    const asset = getAssetInfoByAddress(this.args[0]);
    if (asset.symbol !== 'cETH') return [{asset: this.args[0], owner: this.args[2]}];
    return [];
  }

  async getEthValue() {
    const asset = getAssetInfoByAddress(this.args[0]);
    if (asset.symbol === 'cETH') return this.args[1];
    return '0';
  }
}

module.exports = CompoundPaybackAction;
