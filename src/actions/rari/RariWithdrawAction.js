const Action = require("../../Action");
const { getAssetInfo } = require("@defisaver/tokens");
const { getAddr } = require('../../addresses.js');

/**
 * RariWithdrawAction - Send pool tokens to fund manager which burns them, receive underlying stablecoin back
 */
class RariWithdrawAction extends Action {
  /**
   * @param fundManager {EthAddress} fundManager for the pool which we want to withdraw from
   * @param poolTokenAddress {EthAddress} poolToken address
   * @param poolTokensAmountToPull {string} amount of tokens to pull to proxy
   * @param from {EthAddress} poolTokens will be taken from this address
   * @param stablecoinAddress {EthAddress} stablecoin token address
   * @param stablecoinAmountToWithdraw {string} amount of stablecoin to withdraw from Rari
   * @param to {EthAddress} stablecoins withdrawn will be sent to this address
   */
  constructor(fundManager, poolTokenAddress, poolTokensAmountToPull, from, stablecoinAddress, stablecoinAmountToWithdraw, to) {
    super('RariWithdraw', getAddr('RariWithdraw'), [['address', 'address', 'uint256', 'address', 'address', 'uint256', 'address']], [[fundManager, poolTokenAddress, poolTokensAmountToPull, from, stablecoinAddress, stablecoinAmountToWithdraw, to]]);
    this.mappableArgs = [
      this.args[0][2],
      this.args[0][3],
      this.args[0][5],
      this.args[0][6],
    ];
  }

  async getAssetsToApprove() {
    return [{asset: this.args[0][1], owner: this.args[0][3]}];
  }
}

module.exports = RariWithdrawAction;
