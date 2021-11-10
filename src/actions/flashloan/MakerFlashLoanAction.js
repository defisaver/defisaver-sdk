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
      [['uint256', 'address', 'bytes'], 'uint256'],
      [[amount, flParamGetterAddr, flParamGetterData], 0]
    );
  }
}

module.exports = MakerFlashLoanAction;
