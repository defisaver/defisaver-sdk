const Action = require("../../Action");
const { getAddr } = require('../../addresses.js');

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
    super('CompWithdraw', getAddr('CompWithdraw'), ['address','uint256','address'], [...arguments]);
  }
}

module.exports = CompoundWithdrawAction;
