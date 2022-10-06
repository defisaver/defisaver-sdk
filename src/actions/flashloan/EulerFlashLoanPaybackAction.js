const SendTokenAction = require("../basic/SendTokenAction");
const { getAddr } = require('../../addresses.js');

/**
 * Pays back a flashloan from Euler
 */
class EulerFlashLoanPaybackAction extends SendTokenAction {
  /**
   * @param loanAmount {string}
   */
  constructor(loanAmount, tokenAddr) {
    super(tokenAddr, getAddr('FLEuler'), loanAmount);
  }
}

module.exports = EulerFlashLoanPaybackAction;
