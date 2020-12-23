const Action = require("../../Action");

/**
 * AaveCustomFlashLoanV2Action - Gets a flashloan from Aave v2
 */
class AaveCustomFlashLoanV2Action extends Action {
  /**
   * @param viewer {address}
   * @param loanPayer {address}
   * @param viewerData {bytes}
   */
  constructor(viewer, loanPayer, viewerData) {
    super(
      'FLCustomAaveV2',
      '0x0',
      ['address', 'address', 'bytes', 'uint256'],
      [viewer, loanPayer, viewerData, 0]
    );
  }
}

module.exports = AaveCustomFlashLoanV2Action;
