const Action = require("../../Action");
const {getAssetInfoByAddress} = require("@defisaver/tokens");
const { getAddr } = require('../../addresses.js');

/**
 * AaveV3ATokenPaybackAction - Repay Aave V3 debt using aTokens
 */
class AaveV3ATokenPaybackAction extends Action {
  /**
   * @param market {EthAddress}
   * @param amount {string}
   * @param from {EthAddress} 
   * @param rateMode 
   * @param assetId {EthAddress}
   */
  constructor(market, amount, from, rateMode, assetId) {
    super('AaveV3Payback', getAddr('AaveV3Payback'), 
    [['address','uint256','address','uint8','uint16']],
    [[market, amount, from, rateMode, assetId]]
    );

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
      this.args[0][2],
    ];
  }

  async getAssetsToApprove() {
    const asset = getAssetInfoByAddress(this.args[1]);
    if (asset.symbol !== 'ETH') return [{asset: this.args[1], owner: this.args[3]}];
    return [];
    //TODO
  }
}

module.exports = AaveV3ATokenPaybackAction;
