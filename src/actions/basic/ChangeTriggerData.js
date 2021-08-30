const Action = require("../../Action");
const {getAddr} = require("../../addresses.js");

/**
 */
class ChangeTriggerDataAction extends Action {
  /**
   */
  constructor(subStorageAddr, subId, triggerData) {
    super(
      'ChangeTriggerData',
      getAddr('ChangeTriggerData'),
      [[
        "address",
        "uint256",
        "bytes",
        "uint256",
      ]],
      [[...arguments]]
    );

    this.mappableArgs = [
    ];
  }
}

module.exports = ChangeTriggerDataAction;
