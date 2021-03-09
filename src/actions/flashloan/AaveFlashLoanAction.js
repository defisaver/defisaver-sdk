const Action = require("../../Action");
const { getAddr } = require('../../addresses.js');

/**
 * Gets a flashloan from Aave v1
 */
class AaveFlashLoanAction extends Action {
  /**
   * @param loanAmount {string}
   * @param tokenAddr {EthAddress}
   * @param flParamGetterAddr {EthAddress}
   * @param flParamGetterData {bytes}
   */
  constructor(loanAmount, tokenAddr, flParamGetterAddr, flParamGetterData) {
    super('FLAave', getAddr('FLAave'), ['uint256','address', 'address', 'bytes','uint256'], [loanAmount, tokenAddr, flParamGetterAddr, flParamGetterData, 0]);
  }
}

module.exports = AaveFlashLoanAction;
