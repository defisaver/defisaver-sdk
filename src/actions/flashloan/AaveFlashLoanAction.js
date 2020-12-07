const Action = require("../../Action");

/**
 * AaveFlashLoanAction - Gets a flashloan from Aave v1
 */
class AaveFlashLoanAction extends Action {
  /**
   * @param loanAmount {String}
   * @param tokenAddr {String}
   */
  constructor(loanAmount, tokenAddr) {
    super('FLAave', '0x0', ['uint256','address'], [...arguments]);
  }
}

module.exports = AaveFlashLoanAction;
