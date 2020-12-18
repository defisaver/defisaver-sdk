const Action = require("../../Action");

/**
 * AavePaybackActionV1 - Payback borrowed tokens from AaveV1
 */
class AavePaybackActionV1 extends Action {
  /**
   * @param tokenAddr {String}
   * @param amount {String}
   * @param from {String}
   */
  constructor(tokenAddr, amount, from) {
    super('AavePaybackV1', '0x0', ['address','uint256','address'], [...arguments]);
  }
}

module.exports = AavePaybackActionV1;
