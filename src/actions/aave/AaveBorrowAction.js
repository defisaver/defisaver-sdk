const Action = require("../../Action");

/**
 * AaveBorrowAction - Borrow tokens from Aave
 */
class AaveBorrowAction extends Action {
  /**
   * @param market {String}
   * @param tokenAddr {String}
   * @param amount {String}
   * @param rateMode {Number}
   * @param to {String}
   */
  constructor(market, tokenAddr, amount, rateMode, to) {
    super('AaveBorrow', '0x0', ['address','address','uint256','uint256','address'], [...arguments]);
  }
}

module.exports = AaveBorrowAction;
