const Action = require("../../Action");
const {getAssetInfoByAddress, getAssetInfo} = require("@defisaver/tokens");
const {getAddr} = require('../../addresses.js');

/**
 * CompoundPaybackAction - Payback borrowed tokens from Compound
 */
class CompoundPaybackAction extends Action {
  /**
   * @param cTokenAddr {EthAddress}
   * @param amount {string} Wei amount in underlying asset decimals (not cAsset) - ie. 18 dec for cETH, not 8
   * @param from {EthAddress}
   * @param onBehalf {[EthAddress]}
   */
  constructor(cTokenAddr, amount, from, onBehalf = getAddr('Empty')) {
    super('CompPayback', getAddr('CompPayback'), ['address', 'uint256', 'address', 'address'], [cTokenAddr, amount, from, onBehalf]);
  }

  async getAssetsToApprove() {
    const asset = getAssetInfoByAddress(this.args[0]);
    if (asset.symbol !== 'cETH') return [{asset: getAssetInfo(asset.symbol.substr(1)).address, owner: this.args[2]}];
    return [];
  }
}

module.exports = CompoundPaybackAction;
