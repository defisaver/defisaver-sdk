const Action = require("../../Action");

/**
 * CompoundWithdrawAction - Withdraw token from an Compound position
 */
class CompoundWithdrawAction extends Action {
  /**
   * @param tokenAddr {String}
   * @param amount {String}
   * @param to {String}
   */
  constructor(tokenAddr, amount, to) {
    super('CompWithdraw', '0x0', ['address','uint256','address'], [...arguments]);
  }
}

module.exports = CompoundWithdrawAction;
