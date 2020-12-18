const Action = require("../../Action");

/**
 * CompoundSupplyAction - Supply token to an Compound position
 */
class CompoundSupplyAction extends Action {
  /**
   * @param tokenAddr {String}
   * @param amount {String}
   * @param from {String}
   */
  constructor(tokenAddr, amount, from) {
    super('CompSupply', '0x0', ['address','uint256','address'], [...arguments]);
  }
}

module.exports = CompoundSupplyAction;
