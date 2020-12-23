const Action = require("../../Action");

/**
 * CompoundPaybackAction - Payback borrowed tokens from Compound
 */
class CompoundPaybackAction extends Action {
  /**
   * @param tokenAddr {String}
   * @param amount {String}
   * @param from {String}
   */
  constructor(tokenAddr, amount, from) {
    super('CompPayback', '0x0', ['address','uint256','address'], [...arguments]);
  }
}

module.exports = CompoundPaybackAction;
