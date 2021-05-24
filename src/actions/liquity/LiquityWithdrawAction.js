const Action = require("../../Action");
const {requireAddress} = require("../../utils/general");
const { getAddr } = require('../../addresses.js');

/**
 * LiquityWithdrawAction - withdraw collateral
 */
class LiquityWithdrawAction extends Action {
  /**
   * @param
   */
  constructor(collAmount, to, upperHint, lowerHint) {
    requireAddress(to);
    super('LiquityWithdraw',
        getAddr('LiquityWithdraw'),
        ['uint256','address', 'address','address'],
        [collAmount, to, upperHint, lowerHint]
    );
  }
}

module.exports = LiquityWithdrawAction;
