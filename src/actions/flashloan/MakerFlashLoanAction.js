const Action = require("../../Action");
const { getAddr } = require('../../addresses.js');

/**
 * Gets a flashloan from Maker
 */
class MakerFlashLoanAction extends Action {
  /**
   * @param amount {string}
   * @param flParamGetterAddr {EthAddress}
   * @param flParamGetterData {bytes}
   */
  constructor(amount, flParamGetterAddr = getAddr('Empty'), flParamGetterData= []) {
    super(
      'FLMaker',
      getAddr('FLMaker'),
      ['address[]','uint256[]', 'uint256[]', 'address', 'address', 'bytes', 'bytes'],
      [[], [amount], [], getAddr('Empty'), flParamGetterAddr, flParamGetterData, []]
    );
  }
}

module.exports = MakerFlashLoanAction;
