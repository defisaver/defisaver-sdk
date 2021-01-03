const Action = require("../../Action");
const { getAddr } = require('../../addresses.js');

/**
 * CompoundClaimAction - Claims Comp tokens for the specified address
 */
class CompoundClaimAction extends Action {
  /**
   * @param cSupplyAddresses {String[]}
   * @param cBorrowAddresses {String[]}
   * @param from {String}
   * @param to {String}
   */
  constructor(cSupplyAddresses, cBorrowAddresses, from, to) {
    super('CompClaim', getAddr('CompClaim'), ["address[]", "address[]", "address", "address"], [...arguments]);
  }
}

module.exports = CompoundClaimAction;
