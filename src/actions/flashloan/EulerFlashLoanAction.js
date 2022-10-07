const Action = require("../../Action");
const { getAddr } = require('../../addresses.js');

/**
 * Gets a flashloan from Euler using their low-level one token only flashloan option
 */
class EulerFlashLoanAction extends Action {
  /**
   * @param tokenAddr {EthAddress}
   * @param amount {string}
   * @param flParamGetterAddr {EthAddress}
   * @param flParamGetterData {bytes}
   */
  constructor(tokenAddr, amount, flParamGetterAddr = getAddr('Empty'), flParamGetterData= []) {
    super(
      'FLEuler',
      getAddr('FLEuler'),
      ['address[]','uint256[]', 'uint256[]', 'address', 'address', 'bytes', 'bytes'],
      [[tokenAddr], [amount], [], getAddr('Empty'), flParamGetterAddr, flParamGetterData, []]
    );
  }
}

module.exports = EulerFlashLoanAction;
