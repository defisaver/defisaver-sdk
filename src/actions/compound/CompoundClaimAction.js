const Action = require("../../Action");
const {requireAddress} = require("../../utils/general");
const { getAddr } = require('../../addresses.js');

/**
 * CompoundClaimAction - Claims Comp tokens for the specified address
 */
class CompoundClaimAction extends Action {
  /**
   * @param cSupplyAddresses {EthAddress[]}
   * @param cBorrowAddresses {EthAddress[]}
   * @param from {EthAddress}
   * @param to {EthAddress}
   */
  constructor(cSupplyAddresses, cBorrowAddresses, from, to) {
    requireAddress(to);
    super('CompClaim', getAddr('CompClaim'), ["address[]", "address[]", "address", "address"], [...arguments]);

    this.mappableArgs = [
      this.args[2],
      this.args[3],
    ];
  }
}

module.exports = CompoundClaimAction;
