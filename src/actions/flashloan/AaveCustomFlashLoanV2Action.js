const Action = require("../../Action");
const { getAddr } = require('../../addresses.js');

/**
 * AaveCustomFlashLoanV2Action - Gets a flashloan from Aave v2
 */
class AaveCustomFlashLoanV2Action extends Action {
  /**
   * @param viewer {EthAddress}
   * @param loanPayer {EthAddress}
   * @param viewerData {string} (bytes)
   */
  constructor(viewer, loanPayer, viewerData) {
    super(
      'FLCustomAaveV2',
      getAddr('FLCustomAaveV2'),
      ['address', 'address', 'bytes', 'uint256'],
      [viewer, loanPayer, viewerData, 0]
    );
  }
}

module.exports = AaveCustomFlashLoanV2Action;
