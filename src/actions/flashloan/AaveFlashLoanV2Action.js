const Action = require("../../Action");

/**
 * AaveFlashLoanV2Action - Gets a flashloan from Aave v2
 */
class AaveFlashLoanV2Action extends Action {
  /**
   * @param loanAmounts {Array}
   * @param tokens {Array}
   * @param modes {Array}
   * @param loanPayer {address}
   */
  constructor(loanAmounts, tokens, modes, loanPayer) {
    super(
      'FLAaveV2',
      '0x0',
      ['uint256[]','address[]', 'uint256[]', 'address', 'uint256'],
      [loanAmounts, tokens, modes, loanPayer, 0]
    );
  }
}

module.exports = AaveFlashLoanV2Action;
