const Action = require("../../Action");
const {requireAddress} = require("../../utils/general");
const { getAddr } = require('../../addresses.js');

/**
 * LiquityPaybackAction - Paypack LUSD
 */
class LiquityPaybackAction extends Action {
  /**
   * @param
   */
  constructor(LUSDAmount, from, upperHint, lowerHint) {
    requireAddress(from);
    super('LiquityPayback',
        getAddr('LiquityPayback'),
        ['uint256','address', 'address','address'],
        [LUSDAmount, from, upperHint, lowerHint]
    );
  }
}

module.exports = LiquityPaybackAction;
