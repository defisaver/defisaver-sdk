const Action = require("../../Action");
const {getAssetInfoByAddress} = require("@defisaver/tokens");
const { getAddr } = require('../../addresses.js');

/**
 * AaveSupplyAction - Supply token to an aave position
 */
class AaveSupplyAction extends Action {
  /**
   * @param market {EthAddress}
   * @param tokenAddr {EthAddress}
   * @param amount {string}
   * @param from {EthAddress} Tokens will be supplied from this address
   * @param onBehalf {EthAddress} Tokens will be supplied to this address' position (defaults to sender's proxy)
   * @param enableAsColl {boolean} If we need to enable asset as collateral
   */
  constructor(market, tokenAddr, amount, from, onBehalf = getAddr('Empty'), enableAsColl) {
    super('AaveSupply', getAddr('AaveSupply'), ['address','address','uint256','address','address','bool'], [market, tokenAddr, amount, from, onBehalf, enableAsColl]);
  }

  async getAssetsToApprove() {
    const asset = getAssetInfoByAddress(this.args[1]);
    if (asset.symbol !== 'ETH') return [{asset: this.args[1], owner: this.args[3], protocol: 'aave'}];
    return [];
  }
}

module.exports = AaveSupplyAction;
