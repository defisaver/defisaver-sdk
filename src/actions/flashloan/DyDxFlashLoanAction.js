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
    super('FLDyDx', getAddr('FLDyDx'),[['address[]','uint256[]', 'uint256[]', 'address', 'address', 'bytes', 'bytes']], [[[tokenAddr], [loanAmount], [], getAddr('Empty'),flParamGetterAddr, flParamGetterData, []]]);
  }
}

module.exports = DyDxFlashLoanAction;
