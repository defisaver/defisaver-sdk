const Action = require("../../Action");
const {getAssetInfoByAddress} = require("@defisaver/tokens");
const { getAddr } = require('../../addresses.js');

/**
 * AaveV3PaybackAction - Payback debt on Aave using underlying token
 */
class AaveV3PaybackAction extends Action {
  /**
   * @param market {EthAddress}
   * @param amount {string}
   * @param from {EthAddress} Tokens will be supplied from this address
   * @param rateMode 
   * @param assetId 
   * @param useOnBehalf {boolean} 
   * @param onBehalf {EthAddress} Tokens will be supplied to this address' position (defaults to sender's proxy)
   */
  constructor(market, amount, from, rateMode, assetId, useOnBehalf , onBehalf = getAddr('Empty')) {
    super('AaveV3Payback', getAddr('AaveV3Payback'), 
    [['address','uint256','address','uint8','uint16','bool', 'address']],
    [[market, amount, from, rateMode, assetId, useOnBehalf, onBehalf]]
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

module.exports = AaveV3PaybackAction;
