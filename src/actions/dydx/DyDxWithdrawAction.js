const Action = require("../../Action");
const {requireAddress} = require("../../utils/general");
const { getAddr } = require('../../addresses.js');

/**
 * DyDxWithdrawAction - Withdraw token from an DyDx position
 */
class DyDxWithdrawAction extends Action {
  /**
   * @param tokenAddr {EthAddress}
   * @param amount {string}
   * @param to {EthAddress} Tokens will be withdrawn to this address
   */
  constructor(tokenAddr, amount, to) {
    requireAddress(to);
    super('DyDxWithdraw', getAddr('DyDxWithdraw'), [['address','uint256','address']], [[...arguments]]);
  }
}

module.exports = DyDxWithdrawAction;
