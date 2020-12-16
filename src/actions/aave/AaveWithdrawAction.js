const Action = require("../../Action");

/**
 * AaveWithdrawAction - Withdraw token from an aave position
 */
class AaveWithdrawAction extends Action {
  /**
   * @param market {String}
   * @param tokenAddr {String}
   * @param amount {String}
   * @param to {String}
   */
  constructor(market, tokenAddr, amount, to) {
    super('AaveWithdraw', '0x0', ['address','address','uint256','address'], [...arguments]);
  }
}

module.exports = AaveWithdrawAction;
