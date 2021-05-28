const Action = require("../../Action");
const {requireAddress} = require("../../utils/general");
const { getAddr } = require('../../addresses.js');

/**
 * LiquityBorrowAction - Borrows LUSD from the trove
 */
class LiquityBorrowAction extends Action {
  /**
   * @param maxFeePercentage Highest borrowing fee to accept
   * @param lusdAmount Amount of LUSD tokens to borrow
   * @param to Address that will receive the borrowed tokens
   */
  constructor(maxFeePercentage, lusdAmount, to, upperHint, lowerHint) {
    requireAddress(to);
    super('LiquityBorrow',
        getAddr('LiquityBorrow'),
        ['uint256','uint256','address', 'address','address'],
        [maxFeePercentage, lusdAmount, to, upperHint, lowerHint]
    );
  }
}

module.exports = LiquityBorrowAction;
