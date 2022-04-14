const Action = require("../../Action");
const {getAddr} = require("../../addresses.js");

/**
 * Action for updating sub data
 */
class UpdateSubAction extends Action {
  /**
   * @param storageAddress SubStorage contract address
   * @param subId id of the subscription in the SubStorage contract
   * @param sub object that contains new sub information
   */
  constructor(storageAddress, subId, sub) {
    super("UpdateSub", getAddr("UpdateSub"), [["address", "uint256", "(uint64,bool,bytes[],bytes32[])"]], [[...arguments]]);

  }

}

module.exports = UpdateSubAction;
