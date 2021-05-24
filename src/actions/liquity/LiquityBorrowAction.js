const Action = require("../../Action");
const {requireAddress} = require("../../utils/general");
const { getAddr } = require('../../addresses.js');

/**
 * LiquityBorrowAction - Borrow LUSD
 */
class LiquityBorrowAction extends Action {
  /**
   * @param
   */
  constructor(maxFeePercentage, LUSDAmount, to, upperHint, lowerHint) {
    requireAddress(to);
    super('LiquityBorrow',
        getAddr('LiquityBorrow'),
        ['uint256','uint256','address', 'address','address'],
        [maxFeePercentage, LUSDAmount, to, upperHint, lowerHint]
    );
  }
}

module.exports = LiquityBorrowAction;
