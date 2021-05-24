const Action = require("../../Action");
const {requireAddress} = require("../../utils/general");
const { getAddr } = require('../../addresses.js');

/**
 * LiquityCloseAction - Close trove
 */
class LiquityCloseAction extends Action {
  /**
   * @param
   */
  constructor(from, slip) {
    requireAddress(from);
    super('LiquityClose',
        getAddr('LiquityClose'),
        ['address','uint256'],
        [from, slip]
    );
  }
}

module.exports = LiquityCloseAction;
