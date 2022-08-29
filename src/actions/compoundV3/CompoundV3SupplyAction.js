const Action = require("../../Action");
const {requireAddress} = require("../../utils/general");
const { getAddr } = require('../../addresses.js');

/**
 * CompoundV3SupplyAction - Supply specified amount of token (base or collateral) 
 */
 class CompoundV3SupplyAction extends Action {
    /**
     * @param tokenAddr {EthAddress}
     * @param amount {uint256} wei amount of asset to supply
     * @param from {EthAddress}
     */
     constructor(tokenAddr, amount, from,) {
        super('CompV3Supply', getAddr('CompV3Supply'), ['address','uint256','address'], [tokenAddr, amount, from]);
    
        this.mappableArgs = [
          this.args[0],
          this.args[1],
          this.args[2]
        ];
      }
  }
  
  module.exports = CompoundV3SupplyAction;