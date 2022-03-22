const Action = require("../../Action");
const {getAssetInfoByAddress} = require("@defisaver/tokens");
const { getAddr } = require('../../addresses.js');

/**
 * AaveV3SetEModeAction - Set EMode for the proxy AaveV3 position
 */
class AaveV3SetEModeAction extends Action {
  /**
   * @param market {EthAddress}
   * @param categoryId {EthAddress}
   */
  constructor(market, categoryId) {
    super('AaveV3SetEMode', getAddr('AaveV3SetEMode'), 
    [['address','uint8']],
    [[market, categoryId]]
    );

    this.mappableArgs = [
      this.args[0][0],
    ];
  }

  async getAssetsToApprove() {
    const asset = getAssetInfoByAddress(this.args[1]);
    if (asset.symbol !== 'ETH') return [{asset: this.args[1], owner: this.args[3]}];
    return [];
    //TODO
  }
}

module.exports = AaveV3SetEModeAction;
