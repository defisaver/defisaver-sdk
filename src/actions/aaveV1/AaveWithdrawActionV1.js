const Action = require("../../Action");
const { getAddr } = require('../../addresses.js');

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
    super('AaveWithdrawV1', getAddr('AaveWithdrawV1'), ['address','uint256','address'], [...arguments]);
  }
}

module.exports = AaveWithdrawActionV1;
