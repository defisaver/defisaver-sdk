const Action = require("../../Action");
const {getAssetInfoByAddress, getAssetInfo} = require("@defisaver/tokens");
const { getAddr } = require('../../addresses.js');

/**
 * CompoundSupplyAction - Supply token to an Compound position
 */
class CompoundSupplyAction extends Action {
  /**
   * @param cTokenAddr {EthAddress}
   * @param amount {string} Wei amount in underlying asset decimals (not cAsset) - ie. 18 dec for cETH, not 8
   * @param from {EthAddress}
   * @param enableAsColl {boolean} If we need to enable asset as collateral
   */
  constructor(cTokenAddr, amount, from, enableAsColl = true) {
    super('CompSupply', getAddr('CompSupply'), ['address','uint256','address','bool'], [cTokenAddr, amount, from, enableAsColl]);
  }

  async getAssetsToApprove() {
    const asset = getAssetInfoByAddress(this.args[0]);
    if (asset.symbol !== 'cETH') return [{asset: getAssetInfo(asset.symbol.substr(1)).address, owner: this.args[2]}];
    return [];
  }

  async getEthValue() {
    const asset = getAssetInfoByAddress(this.args[0]);
    if (asset.symbol === 'cETH') return this.args[1];
    return '0';
  }
}

module.exports = CompoundSupplyAction;
