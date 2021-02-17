const SendTokenAction = require("../basic/SendTokenAction");
const { getAddr } = require('../../addresses.js');

/**
 * Pays back a single flashloan from Aave v2
 */
class AaveV2FlashLoanPaybackAction extends SendTokenAction {
  /**
   * @param loanAmount {string}
   * @param tokenAddr {EthAddress}
   */
  constructor(loanAmount, tokenAddr) {
    super(tokenAddr, getAddr('FLAaveV2'), loanAmount);
  }
}

module.exports = AaveV2FlashLoanPaybackAction;
