const Action = require("../../Action");

/**
 * AavePaybackActionV1 - Payback borrowed tokens from AaveV1
 */
class AavePaybackActionV1 extends Action {
  /**
   * @param tokenAddr {address}
   * @param amount {String}
   * @param from {address}
   * @param onBehalf {address}
   */
  constructor(tokenAddr, amount, from, onBehalf) {
    super('AavePaybackV1', '0x0', ['address','uint256','address', 'address'], [...arguments]);
  }
}

module.exports = AavePaybackActionV1;
