const Action = require("../../Action");
const {requireAddress} = require("../../utils/general");
const { getAddr } = require('../../addresses.js');

/**
 * CompoundV3AllowAction - Change if manager has authority over owner based on isAllowed from CompoundV3
 */
 class CompoundV3AllowAction extends Action {
    /**
     * @param market {EthAddress} Comet proxy address of the market
     * @param manager {EthAddress} address of manager
     * @param isAllowed {bool}
     */
    constructor(market, manager, isAllowed) {
      requireAddress(manager);
      super('CompV3Allow', getAddr('CompV3Allow'), ['address', 'address','bool'], [...arguments]);

      this.mappableArgs = [
        this.args[0],
        this.args[1],
        this.args[2],
      ];
    }
  }
  
  module.exports = CompoundV3AllowAction;