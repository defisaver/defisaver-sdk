const Action = require("../../Action");
const {requireAddress} = require("../../utils/general");
const { getAddr } = require('../../addresses.js');

/**
 * CompoundBorrowAction - Borrow tokens from Compound
 */
class CompoundBorrowAction extends Action {
  /**
   * @param cTokenAddr {EthAddress}
   * @param amount {string} Wei amount in underlying asset decimals (not cAsset) - ie. 18 dec for cETH, not 8
   * @param to {EthAddress}
   */
  constructor(cTokenAddr, amount, to) {
    requireAddress(to);
    super('CompBorrow', getAddr('CompBorrow'), [['address','uint256','address']], [[...arguments]]);

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
      this.args[0][2],
    ];
  }
}

module.exports = CompoundBorrowAction;
