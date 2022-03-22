const Action = require("../../Action");
const {getAssetInfoByAddress} = require("@defisaver/tokens");
const { getAddr } = require('../../addresses.js');

/**
 * AaveV3SupplyAction - Supply token to an aave position on Aave V3
 */
class AaveV3SupplyAction extends Action {
  /**
   * @param market {EthAddress}
   * @param amount {string}
   * @param from {EthAddress} Tokens will be supplied from this address
   * @param assetId
   * @param enableAsColl {boolean} If we need to enable asset as collateral
   * @param useOnBehalf {boolean} 
   * @param onBehalf {EthAddress} Tokens will be supplied to this address' position (defaults to sender's proxy)
   */
  constructor(market, amount, from, assetId, enableAsColl, useOnBehalf , onBehalf = getAddr('Empty')) {
    super('AaveV3Supply', getAddr('AaveV3Supply'), 
    [['address','uint256','address','uint16','bool','bool', 'address']],
    [[market, amount, from, assetId, enableAsColl, useOnBehalf, onBehalf]]
    );

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
      this.args[0][2],
      this.args[0][6],
    ];
  }

  async getAssetsToApprove() {
    const asset = getAssetInfoByAddress(this.args[1]);
    if (asset.symbol !== 'ETH') return [{asset: this.args[1], owner: this.args[3]}];
    return [];
    //TODO
  }
}

module.exports = AaveV3SupplyAction;
