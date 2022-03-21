const Action = require("../../Action");
const {getAssetInfoByAddress} = require("@defisaver/tokens");
const { getAddr } = require('../../addresses.js');

/**
 * AaveSupplyAction - Supply token to an aave position
 */
class AaveV3SupplyAction extends Action {
  /**
   *    address market;
        uint256 amount;
        address from;
        uint16 assetId;
        bool enableAsColl;
        bool useOnBehalf;
        address onBehalf;
   * @param market {EthAddress}
   * @param tokenAddr {EthAddress}
   * @param amount {string}
   * @param from {EthAddress} Tokens will be supplied from this address
   * @param onBehalf {EthAddress} Tokens will be supplied to this address' position (defaults to sender's proxy)
   * @param enableAsColl {boolean} If we need to enable asset as collateral
   */
  constructor(market, amount, from, assetId, enableAsColl, useOnBehalf , onBehalf = getAddr('Empty')) {
    super('AaveV3Supply', getAddr('AaveV3Supply'), 
    [['address','uint256','address','uint16','bool','bool', 'address']],
    [[market, amount, from, assetId, enableAsColl, useOnBehalf, onBehalf]]
    );

    this.mappableArgs = [
      //TODO
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
