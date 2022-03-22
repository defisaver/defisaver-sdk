const Action = require("../../Action");
const {getAssetInfoByAddress} = require("@defisaver/tokens");
const { getAddr } = require('../../addresses.js');

/**
 * AaveV3WithdrawAction - Withdraw a previously supplied token from a position in AaveV3
 */
class AaveV3WithdrawAction extends Action {
  /**
   * @param market {EthAddress}
   * @param assetId 
   * @param amount {string}
   * @param to {EthAddress} 
   */
  constructor(market, assetId, amount, to) {
    super('AaveV3Withdraw', getAddr('AaveV3Withdraw'), 
    [['address','uint16','uint256','address']],
    [[market, assetId, amount, to]]
    );

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][2],
      this.args[0][3],
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
