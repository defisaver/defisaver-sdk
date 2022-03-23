const Action = require("../../Action");
const {requireAddress} = require("../../utils/general");
const {getAddr} = require('../../addresses.js');

/**
 * AaveBorrowAction - Borrow tokens from Aave
 */
class AaveBorrowAction extends Action {
  /**
   * @param market {EthAddress}
   * @param tokenAddr {EthAddress}
   * @param amount {string}
   * @param rateMode {number} Borrow rate mode: Stable: 1, Variable: 2
   * @param to {EthAddress} Borrowed tokens will be sent to this address
   * @param onBehalf {EthAddress}
   */
  constructor(market, tokenAddr, amount, rateMode, to, onBehalf = getAddr('Empty')) {
    requireAddress(to);
    super(
      'AaveBorrow',
      getAddr('AaveBorrow'),
      [['address', 'address', 'uint256', 'uint256', 'address', 'address']],
      [[market, tokenAddr, amount, rateMode, to, onBehalf]],
    );

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
      this.args[0][2],
      this.args[0][3],
      this.args[0][4],
      this.args[0][5],
    ];
  }
}

module.exports = AaveBorrowAction;
