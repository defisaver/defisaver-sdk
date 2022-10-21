const Action = require("../../Action");
const { requireAddress } = require("../../utils/general");
const { getAddr } = require("../../addresses.js");

/**
 * CompoundV3WithdrawAction - Withdraw token from an Compound position
 */
class CompoundV3WithdrawAction extends Action {
  /**
   * @param market {EthAddress} Comet proxy address of the market
   * @param to {EthAddress} Address where we are sending the tokens
   * @param asset {EthAddress} Address of asset to withdraw
   * @param amount {string} Wei amount in specified asset
   * @param onBehalf {EthAddress} Address from where we are withdrawing the tokens
   */
  constructor(market, to, asset, amount, onBehalf) {
    requireAddress(to);
    requireAddress(asset);
    super(
      "CompV3Withdraw",
      getAddr("CompV3Withdraw"),
      ["address","address", "address","uint256","address"],
      [...arguments]
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
      this.args[4],
    ];
  }
}

module.exports = CompoundV3WithdrawAction;
