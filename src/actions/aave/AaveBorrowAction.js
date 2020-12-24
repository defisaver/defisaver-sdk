const Action = require("../../Action");
const { getAddr } = require('../../addresses.js');

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
   * @param onBehlaf {String}
   */
  constructor(market, tokenAddr, amount, rateMode, to, onBehlaf) {
    super('AaveBorrow', getAddr('AaveBorrow'), ['address','address','uint256','uint256','address','address'], [...arguments]);
  }
}

module.exports = AaveBorrowAction;
