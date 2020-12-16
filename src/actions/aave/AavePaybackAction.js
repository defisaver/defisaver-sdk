const Action = require("../../Action");

/**
 * AavePaybackAction - Payback borrowed tokens from Aave
 */
class AavePaybackAction extends Action {
  /**
   * @param market {String}
   * @param tokenAddr {String}
   * @param amount {String}
   * @param rateMode {Number}
   * @param from {String}
   */
  constructor(market, tokenAddr, amount, rateMode, from) {
    super('AavePayback', '0x0', ['address','address','uint256','uint256','address'], [...arguments]);
  }
}

module.exports = AavePaybackAction;
