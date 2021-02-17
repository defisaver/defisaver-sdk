const SendTokenAction = require("../basic/SendTokenAction");
const { getAddr } = require('../../addresses.js');

/**
 * Pays back a flashloan from DyDx
 */
class DyDxFlashLoanPaybackAction extends SendTokenAction {
  /**
   * @param loanAmount {string}
   * @param tokenAddr {EthAddress}
   */
  constructor(loanAmount, tokenAddr) {
    super(tokenAddr, getAddr('FLDyDx'), loanAmount);
  }
}

module.exports = DyDxFlashLoanPaybackAction;
