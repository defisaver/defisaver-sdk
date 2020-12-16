const Action = require("../../Action");

/**
 * AaveSupplyAction - Supply token to an aave position
 */
class AaveSupplyAction extends Action {
  /**
   * @param market {String}
   * @param tokenAddr {String}
   * @param amount {String}
   * @param from {String}
   */
  constructor(market, tokenAddr, amount, from) {
    super('AaveSupply', '0x0', ['address','address','uint256','address'], [...arguments]);
  }
}

module.exports = AaveSupplyAction;
