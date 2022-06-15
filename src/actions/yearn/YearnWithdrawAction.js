const Action = require("../../Action");
const {getAssetInfoByAddress} = require("@defisaver/tokens");
const { getAddr } = require('../../addresses.js');

/**
 * YearnWithdrawAction - Burns yTokens and receive underlying tokens in return
 */
class YearnWithdrawAction extends Action {
  /**
   * @param tokenAddr {EthAddress} yToken address
   * @param amount {string} amount of yTokens to burn
   * @param from {EthAddress} yTokens will be taken from this address
   * @param to {ETHAddress} underlying tokens will be sent to this address
   */
  constructor(tokenAddr, amount, from, to) {
    super('YearnWithdraw', getAddr('YearnWithdraw'), ['address','uint256','address', 'address'], [tokenAddr, amount, from, to]);
    this.mappableArgs = [
      this.args[1],
      this.args[2],
      this.args[3],
    ];
  }

  async getAssetsToApprove() {
    const asset = getAssetInfoByAddress(this.args[0]);
    if (asset.symbol !== 'ETH') return [{asset: this.args[0], owner: this.args[2], specialApproveLabel: 'yearn'}];
    return [];
  }
}

module.exports = YearnWithdrawAction;
