const Action = require("../../Action");
const {getAddr} = require("../../addresses.js");

/**
 */
class ChangeSubDataAction extends Action {
  /**
   */
  constructor(subStorageAddr, subId, triggerData) {
    super(
      'ChangeSubData',
      getAddr('ChangeSubData'),
      [[
        "address",
        "uint256",
        "bytes[]",
      ]],
      [[...arguments]]
    );

    this.mappableArgs = [
    ];
  }
}

module.exports = ChangeSubDataAction;
