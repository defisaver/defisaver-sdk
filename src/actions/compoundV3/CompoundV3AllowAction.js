const Action = require("../../Action");
const {requireAddress} = require("../../utils/general");
const { getAddr } = require('../../addresses.js');

/**
 * CompoundV3AllowAction - Change if manager has authority over owner based on isAllowed from CompoundV3
 */
 class CompoundV3AllowAction extends Action {
    /**
     * @param manager {EthAddress} address of manager
     * @param isAllowed {bool}
     */
    constructor(manager, isAllowed) {
      requireAddress(manager);
      super('CompV3Allow', getAddr('CompV3Allow'), ['address','bool'], [...arguments]);
    }
  }
  
  module.exports = CompoundV3AllowAction;