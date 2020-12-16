const Action = require("../../Action");

/**
 * CompoundBorrowAction - Borrow tokens from Compound
 */
class CompoundBorrowAction extends Action {
  /**
   * @param tokenAddr {String}
   * @param amount {String}
   * @param to {String}
   */
  constructor(tokenAddr, amount, to) {
    super('CompBorrow', '0x0', ['address','uint256','address'], [...arguments]);
  }
}

module.exports = CompoundBorrowAction;
