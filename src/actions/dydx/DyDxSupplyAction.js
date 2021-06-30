const Action = require("../../Action");
const {getAssetInfoByAddress} = require("@defisaver/tokens");
const { getAddr } = require('../../addresses.js');

/**
 * DyDxSupplyAction - Supply token to an DyDx position
 */
class DyDxSupplyAction extends Action {
  /**
   * @param tokenAddr {EthAddress}
   * @param amount {string}
   * @param from {EthAddress} Tokens will be supplied from this address
   */
  constructor(tokenAddr, amount, from) {
    super('DyDxSupply', getAddr('DyDxSupply'), [['address','uint256','address']], [[tokenAddr, amount, from]]);

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
      this.args[0][2],
    ];
  }

  async getAssetsToApprove() {
    const asset = getAssetInfoByAddress(this.args[0]);
    if (asset.symbol !== 'ETH') return [{asset: this.args[0], owner: this.args[2]}];
    return [];
  }
}

module.exports = DyDxSupplyAction;
