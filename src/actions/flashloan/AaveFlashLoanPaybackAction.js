const SendTokenAction = require("../basic/SendTokenAction");
const { getAddr } = require('../../addresses.js');

/**
 * Pays back a flashloan from Aave v1
 */
class AaveFlashLoanPaybackAction extends SendTokenAction {
  /**
   * @param loanAmount {String}
   * @param tokenAddr {String}
   */
  constructor(loanAmount, tokenAddr) {
    super(tokenAddr, getAddr('FLAave'), loanAmount);
  }
}

module.exports = AaveFlashLoanPaybackAction;
