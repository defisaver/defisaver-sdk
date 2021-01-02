const Action = require("../../Action");
const { getAddr } = require('../../addresses.js');

/**
 * CompoundBorrowAction - Borrow tokens from Compound
 */
class CompoundBorrowAction extends Action {
  /**
   * @param cTokenAddr {String}
   * @param amount {String}
   * @param to {String}
   */
  constructor(cTokenAddr, amount, to) {
    super('CompBorrow', getAddr('CompBorrow'), ['address','uint256','address'], [...arguments]);
  }
}

module.exports = CompoundBorrowAction;
