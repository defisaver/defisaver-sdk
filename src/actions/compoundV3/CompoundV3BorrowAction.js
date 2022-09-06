const Action = require("../../Action");
const {requireAddress} = require("../../utils/general");
const { getAddr } = require('../../addresses.js');

/**
 * CompoundV3BorrowAction - Borrow base tokens from CompoundV3
 */
 class CompoundV3BorrowAction extends Action {
    /**
     * @param market {EthAddress} Comet proxy address of the market
     * @param amount {string} Wei amount in underlying asset decimals (not cAsset) - ie. 18 dec for cETH, not 8
     * @param to {EthAddress}
     */
    constructor(market, amount, to) {
      requireAddress(to);
      super('CompV3Borrow', getAddr('CompV3Borrow'), ['address','uint256','address'], [...arguments]);

      this.mappableArgs = [
        this.args[0],
        this.args[1],
        this.args[2],
      ];
    }
  }
  
  module.exports = CompoundV3BorrowAction;