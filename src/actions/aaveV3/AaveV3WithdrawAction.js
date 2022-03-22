const Action = require("../../Action");
const {getAssetInfoByAddress} = require("@defisaver/tokens");
const { getAddr } = require('../../addresses.js');

/**
 * AaveSupplyAction - Supply token to an aave position
 */
class AaveV3WithdrawAction extends Action {
  /**
   *    address market;
        uint16 assetId;
        uint256 amount;
        address to;
   * @param market {EthAddress}
   * @param tokenAddr {EthAddress}
   * @param amount {string}
   * @param from {EthAddress} Tokens will be supplied from this address
   * @param onBehalf {EthAddress} Tokens will be supplied to this address' position (defaults to sender's proxy)
   * @param enableAsColl {boolean} If we need to enable asset as collateral
   */
  constructor(market, assetId, amount, to) {
    super('AaveV3Withdraw', getAddr('AaveV3Withdraw'), 
    [['address','uint16','uint256','address']],
    [[market, assetId, amount, to]]
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

module.exports = AaveV3WithdrawAction;
