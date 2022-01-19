const Action = require("../../Action");
const { getAssetInfo } = require("@defisaver/tokens");
const { getAddr } = require('../../addresses.js');

/**
 * RariDepositAction - action that deposits one stablecoin (DAI, USDC, USDT, TUSD, BUSD, and sUSD) and receives RSPT back
 */
class RariDepositAction extends Action {
  /**
   * @param fundManager {EthAddress} fundManager for the pool which we want to deposit into
   * @param stablecoinAddress {EthAddress} stablecoin token address
   * @param poolTokenAddress {EthAddress} poolTokenAddress
   * @param amount {string} amount of stablecoin to pull and deposit
   * @param from {EthAddress} stablecoins will be taken from this address
   * @param to {EthAddress} RSPT will be sent to this address
   */
  constructor(fundManager, stablecoinAddress, poolTokenAddress, amount, from, to) {
    super('RariDeposit', getAddr('RariDeposit'), [['address', 'address', 'address', 'uint256', 'address', 'address']], [[fundManager, stablecoinAddress, poolTokenAddress, amount, from, to]]);
    this.mappableArgs = [
      this.args[0][3],
      this.args[0][4],
      this.args[0][5],
    ];
  }

  async getAssetsToApprove() {
    return [{asset: this.args[0][1], owner: this.args[0][4]}];
  }
}

module.exports = RariDepositAction;
