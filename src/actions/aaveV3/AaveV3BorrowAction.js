const Action = require("../../Action");
const {getAssetInfoByAddress} = require("@defisaver/tokens");
const { getAddr } = require('../../addresses.js');

/**
 * AaveV3BorrowAction - Borrow a token from AaveV3
 */
class AaveV3BorrowAction extends Action {
   /**
   * @param market {EthAddress}
   * @param amount {string}
   * @param to {EthAddress}
   * @param rateMode
   * @param assetId {EthAddress} 
   * @param useOnBehalf {boolean} 
   * @param onBehalf {EthAddress} 
   */
  constructor(market, amount, to, rateMode, assetId, useOnBehalf , onBehalf = getAddr('Empty')) {
    super('AaveV3Borrow', getAddr('AaveV3Borrow'), 
    [['address','uint256','address','uint8','uint16','bool', 'address']],
    [[market, amount, to, rateMode, assetId, useOnBehalf, onBehalf]]
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

module.exports = AaveV3BorrowAction;
