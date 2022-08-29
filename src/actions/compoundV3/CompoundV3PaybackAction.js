const Action = require("../../Action");
const {requireAddress} = require("../../utils/general");
const { getAddr } = require('../../addresses.js');

/**
 * CompoundV3PaybackAction - Repays specified amount of base token 
 */
 class CompoundV3PaybackAction extends Action {
    /**
     * @param amount {uint256} amount of base token to be paid back
     * @param from {EthAddress} address from which funds are paid
     * @param onBehalf {EthAddress} address for which the funds are paid back
     */
    constructor(amount, from, onBehalf) {
      requireAddress(from);
      requireAddress(onBehalf);
      super(
        'CompV3Payback', 
        getAddr('CompV3Payback'), 
        ['uint256','address','address'], 
        [...arguments]
      );
    }
  }
  
  module.exports = CompoundV3PaybackAction;