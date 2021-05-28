const Action = require("../../Action");
const {requireAddress} = require("../../utils/general");
const { getAddr } = require('../../addresses.js');

/**
 * LiquityWithdrawAction - Withdraws collateral from the trove
 */
class LiquityWithdrawAction extends Action {
  /**
   * @param collAmount Amount of WETH tokens to withdraw
   * @param to Address that will receive the withdrawn tokens 
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
