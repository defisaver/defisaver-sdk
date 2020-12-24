const Action = require("../../Action");
const { getAddr } = require('../../addresses.js');

/**
 * DyDxFlashLoanAction - Gets a flashloan from DyDx
 */
class DyDxFlashLoanAction extends Action {
  /**
   * @param loanAmount {String}
   * @param tokenAddr {String}
   */
  constructor(loanAmount, tokenAddr) {
    super('FLDyDx', getAddr('FLDyDx'), ['uint256','address', 'uint256'], [loanAmount, tokenAddr, 0]);
  }
}

module.exports = DyDxFlashLoanAction;
