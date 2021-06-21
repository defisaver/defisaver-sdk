const Action = require("../../Action");
const { getAddr } = require('../../addresses.js');

/**
 * Gets a flashloan from DyDx
 */
class DyDxFlashLoanAction extends Action {
  /**
   * @param loanAmount {string}
   * @param tokenAddr {EthAddress}
   * @param flParamGetterAddr {EthAddress}
   * @param flParamGetterData {bytes}
   */
  constructor(loanAmount, tokenAddr, flParamGetterAddr = getAddr('Empty'), flParamGetterData= []) {
    super('FLDyDx', getAddr('FLDyDx'),[['uint256','address', 'address', 'bytes','uint256']], [[loanAmount, tokenAddr, flParamGetterAddr, flParamGetterData, 0]]);
  }
}

module.exports = DyDxFlashLoanAction;
