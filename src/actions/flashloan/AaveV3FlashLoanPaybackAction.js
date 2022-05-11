const SendTokenAction = require("../basic/SendTokenAction");
const { getAddr } = require('../../addresses.js');

/**
 * Pays back a single flashloan from Aave v3
 */
class AaveV3FlashLoanPaybackAction extends SendTokenAction {
  /**
   * @param loanAmount {string}
   * @param tokenAddr {EthAddress}
   */
  constructor(loanAmount, tokenAddr) {
    super(tokenAddr, getAddr('FLAaveV3'), loanAmount);
  }
}

module.exports = AaveV3FlashLoanPaybackAction;
