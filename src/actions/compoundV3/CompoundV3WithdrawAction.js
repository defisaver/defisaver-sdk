const Action = require("../../Action");
const { requireAddress } = require("../../utils/general");
const { getAddr } = require("../../addresses.js");

/**
 * CompoundV3WithdrawAction - Withdraw token from an Compound position
 */
class CompoundV3WithdrawAction extends Action {
  /**
   * @param to {EthAddress} Address of the recipient
   * @param asset {EthAddress} Address of asset to withdraw
   * @param amount {string} Wei amount in specified asset
   */
  constructor(to, asset, amount) {
    requireAddress(to);
    requireAddress(asset);
    super(
      "CompV3Withdraw",
      getAddr("CompV3Withdraw"),
      ["address", "address", "uint256"],
      [...arguments]
    );
  }
}

module.exports = CompoundV3WithdrawAction;
