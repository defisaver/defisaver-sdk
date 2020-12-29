const Action = require("../../Action");
const { getAddr } = require('../../addresses.js');

/**
 * Gets a flashloan from Aave v1
 */
class AaveFlashLoanAction extends Action {
  /**
   * @param loanAmount {String}
   * @param tokenAddr {String}
   */
  constructor(loanAmount, tokenAddr) {
    super('FLAave', getAddr('FLAave'), ['uint256','address', 'uint256'], [loanAmount, tokenAddr, 0]);
  }
}

module.exports = AaveFlashLoanAction;
