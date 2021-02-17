const Action = require("../../Action");
const { getAddr } = require('../../addresses.js');

/**
 * AaveWithdrawActionV1 - Withdraw token from an aaveV1 position
 */
class AaveV1WithdrawAction extends Action {
  /**
   * @param tokenAddr {EthAddress}
   * @param amount {string}
   * @param to {EthAddress} Tokens will be withdrawn to this address
   */
  constructor(tokenAddr, amount, to) {
    super('AaveWithdrawV1', getAddr('AaveWithdrawV1'), ['address','uint256','address'], [...arguments]);
  }
}

module.exports = AaveV1WithdrawAction;
