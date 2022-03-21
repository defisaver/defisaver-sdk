const Action = require("../../Action");
const {getAssetInfoByAddress} = require("@defisaver/tokens");
const { getAddr } = require('../../addresses.js');

/**
 * AaveSupplyAction - Supply token to an aave position
 */
class AaveV3BorrowAction extends Action {
  /**
   *    address market;
        uint256 amount;
        address to;
        uint8 rateMode;
        uint16 assetId;
        bool useOnBehalf;
        address onBehalf;
   * @param market {EthAddress}
   * @param tokenAddr {EthAddress}
   * @param amount {string}
   * @param from {EthAddress} Tokens will be supplied from this address
   * @param onBehalf {EthAddress} Tokens will be supplied to this address' position (defaults to sender's proxy)
   * @param enableAsColl {boolean} If we need to enable asset as collateral
   */
  constructor(market, amount, to, rateMode, assetId, useOnBehalf , onBehalf = getAddr('Empty')) {
    super('AaveV3Borrow', getAddr('AaveV3Borrow'), 
    [['address','uint256','address','uint8','uint16','bool', 'address']],
    [[market, amount, to, rateMode, assetId, useOnBehalf, onBehalf]]
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

module.exports = AaveV3BorrowAction;
