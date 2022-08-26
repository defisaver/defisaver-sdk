const Action = require("../../Action");
const {requireAddress} = require("../../utils/general");
const { getAddr } = require('../../addresses.js');

/**
 * CompoundV3BorrowAction - Borrow base tokens from CompoundV3
 */
 class CompoundV3BorrowAction extends Action {
    /**
     * @param amount {string} Wei amount in underlying asset decimals (not cAsset) - ie. 18 dec for cETH, not 8
     * @param to {EthAddress}
     */
    constructor(amount, to) {
      requireAddress(to);
      super('CompBorrow', getAddr('CompBorrow'), ['uint256','address'], [...arguments]);
    }
  }
  
  module.exports = CompoundV3BorrowAction;