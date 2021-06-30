const Action = require("../../Action");
const {requireAddress} = require("../../utils/general");
const { getAddr } = require('../../addresses.js');

/**
 * AaveWithdrawAction - Withdraw token from an aave position
 */
class AaveWithdrawAction extends Action {
  /**
   * @param market {EthAddress}
   * @param tokenAddr {EthAddress}
   * @param amount {string}
   * @param to {EthAddress} Tokens will be withdrawn to this address
   */
  constructor(market, tokenAddr, amount, to) {
    requireAddress(to);
    super('AaveWithdraw', getAddr('AaveWithdraw'), [['address','address','uint256','address']], [[...arguments]]);

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
      this.args[0][2],
      this.args[0][3],
    ];
  }
}

module.exports = AaveWithdrawAction;
