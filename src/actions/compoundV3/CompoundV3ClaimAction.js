const Action = require("../../Action");
const { requireAddress } = require("../../utils/general");
const { getAddr } = require("../../addresses.js");

/**
 * CompoundV3ClaimAction - Claims Comp tokens to, and for, a specified address
 */
class CompoundV3ClaimAction extends Action {
  /**
   * @param market {EthAddress} Comet proxy address of the market
   * @param onBehalfOf {EthAddress} The owner to claim for
   * @param to {EthAddress} The address to receive the rewards
   * @param shouldAccrue {bool} If true, the protocol will account for the rewards owed to the account as of the current block before transferring
   */
  constructor(market, onBehalfOf, to, shouldAccrue) {
    requireAddress(onBehalfOf);
    requireAddress(to);
    super(
      "CompV3Claim",
      getAddr("CompV3Claim"),
      ["address","address", "address", "bool"],
      [...arguments]
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
    ];
  }
}

module.exports = CompoundV3ClaimAction;
