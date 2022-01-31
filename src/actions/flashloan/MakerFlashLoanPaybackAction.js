const SendTokenAction = require("../basic/SendTokenAction");
const { getAddr } = require('../../addresses.js');

/**
 * Pays back a flashloan from Maker
 */
class MakerFlashLoanPaybackAction extends SendTokenAction {
  /**
   * @param loanAmount {string}
   */
  constructor(loanAmount, tokenAddr) {
    super(getAddr('DAI'), getAddr('FLMaker'), loanAmount);
  }
}

module.exports = MakerFlashLoanPaybackAction;
