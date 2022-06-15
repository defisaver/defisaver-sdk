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
      ['address', 'address', 'uint256', 'uint256', 'address', 'address'],
      [market, tokenAddr, amount, rateMode, to, onBehalf],
    );
  }
}

module.exports = AaveBorrowAction;
