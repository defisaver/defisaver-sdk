const SendTokenAction = require("../basic/SendTokenAction");
const { getAddr } = require('../../addresses.js');

/**
 * Pays back a flashloan from Aave v1
 */
class AaveFlashLoanPaybackAction extends SendTokenAction {
  /**
   * @param loanAmount {string}
   * @param tokenAddr {EthAddress}
   */
  constructor(loanAmount, tokenAddr) {
    super(tokenAddr, getAddr('FLAave'), loanAmount);
  }
}

module.exports = AaveFlashLoanPaybackAction;
