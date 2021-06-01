const Action = require("../../Action");
const {getAssetInfoByAddress} = require("@defisaver/tokens");
const { getAddr } = require('../../addresses.js');

/**
 * YearnWithdrawAction - Supply token to a Yearn vault
 */
class YearnWithdrawAction extends Action {
  /**
   * @param tokenAddr {EthAddress}
   * @param amount {string}
   * @param from {EthAddress} Tokens will be supplied from this address
   * @param to {ETHAddress} yTokens will be sent to this address
   */
  constructor(tokenAddr, amount, from, to) {
    super('YearnWithdraw', getAddr('YearnWithdraw'), [['address','uint256','address', 'address']], [[tokenAddr, amount, from, to]]);
    this.mappableArgs = [
      this.args[0][1],
      this.args[0][2],
      this.args[0][3],
    ];
  }
  
  async getAssetsToApprove() {
    const asset = getAssetInfoByAddress(this.args[0][0]);
    if (asset.symbol !== 'ETH') return [{asset: this.args[0][0], owner: this.args[0][2]}];
    return [];
  }
}

module.exports = YearnWithdrawAction;