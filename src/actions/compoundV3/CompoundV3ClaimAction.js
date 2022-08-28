const Action = require("../../Action");
const { requireAddress } = require("../../utils/general");
const { getAddr } = require("../../addresses.js");

/**
 * CompoundV3ClaimAction - Claims Comp tokens to, and for, a specified address
 */
class CompoundV3ClaimAction extends Action {
  /**
   * @param src {EthAddress} The owner to claim for
   * @param to {EthAddress} The address to receive the rewards
   * @param shouldAccrue {bool} If true, the protocol will account for the rewards owed to the account as of the current block before transferring
   */
  constructor(src, to, shouldAccrue) {
    requireAddress(src);
    requireAddress(to);
    super(
      "CompV3Claim",
      getAddr("CompV3Claim"),
      ["address", "address", "bool"],
      [...arguments]
    );
  }
}

module.exports = CompoundV3ClaimAction;
