const Action = require("../../Action");

/**
 * AaveWithdrawActionV1 - Withdraw token from an aaveV1 position
 */
class AaveWithdrawActionV1 extends Action {
  /**
   * @param tokenAddr {String}
   * @param amount {String}
   * @param to {String}
   */
  constructor(tokenAddr, amount, to) {
    super('AaveWithdrawV1', '0x0', ['address','uint256','address'], [...arguments]);
  }
}

module.exports = AaveWithdrawActionV1;
