const Action = require("../../Action");
const {requireAddress} = require("../../utils/general");
const { getAddr } = require('../../addresses.js');

/**
 * CompoundV3BorrowAction - Borrow base tokens from CompoundV3
 */
 class CompoundV3BorrowAction extends Action {
    /**
     * @param market {EthAddress} Comet proxy address of the market
     * @param amount {string} Wei amount in underlying asset decimals
     * @param from {EthAddress} Address from which we are borrowing the tokens
     * @param to {EthAddress} Address where we send the borrowed tokens
     */
    constructor(market, amount, from, to) {
      requireAddress(to);
      super('CompV3Borrow', getAddr('CompV3Borrow'), ['address','uint256','address','address'], [...arguments]);

      this.mappableArgs = [
        this.args[0],
        this.args[1],
        this.args[2],
        this.args[3],
      ];
    }
  }
  
  module.exports = CompoundV3BorrowAction;