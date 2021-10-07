const SendTokenAction = require("@defisaver/sdk/src/actions/basic/SendTokenAction");
const { getAddr } = require('@defisaver/sdk/src/addresses');

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
