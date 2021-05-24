const Action = require("../../Action");
const {requireAddress} = require("../../utils/general");
const { getAddr } = require('../../addresses.js');

/**
 * LiquityOpenAction - Open trove
 */
class LiquityOpenAction extends Action {
  /**
   * @param
   */
  constructor(maxFeePercentage, collAmount, LUSDAmount, from, to, upperHint, lowerHint) {
    requireAddress(from);
    requireAddress(to);
    super('LiquityOpen',
      getAddr('LiquityOpen'),
      ['uint256','uint256', 'uint256', 'address','address', 'address','address'],
      [maxFeePercentage, collAmount, LUSDAmount, from, to, upperHint, lowerHint]
    );
  }
}

module.exports = LiquityOpenAction;
