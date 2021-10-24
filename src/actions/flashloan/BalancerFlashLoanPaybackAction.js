const SendTokenAction = require("@defisaver/sdk/src/actions/basic/SendTokenAction");
const { getAddr } = require('@defisaver/sdk/src/addresses');

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
