const SendTokenAction = require("../basic/SendTokenAction");
const { getAddr } = require('../../addresses.js');

/**
 * Pays back a flashloan from Balancer
 */
class BalancerFlashLoanPaybackAction extends SendTokenAction {
   /**
   * @param loanAmount {string}
   * @param tokenAddr {EthAddress}
   */
    constructor(loanAmount, tokenAddr) {
      super(tokenAddr, getAddr('FLBalancer'), loanAmount);
    }
}

module.exports = BalancerFlashLoanPaybackAction;
