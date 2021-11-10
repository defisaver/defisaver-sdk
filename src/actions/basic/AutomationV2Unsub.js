const Action = require("@defisaver/sdk/src/Action");
const { getAddr } = require('@defisaver/sdk/src/addresses');

class AutomationV2Unsub extends Action {
  constructor(protocol, cdpId = 0) {
    super(
      'AutomationV2Unsub',
      getAddr('AutomationV2Unsub'),
      [["uint256", "uint256"]],
      [[cdpId, protocol]]
    );
  }
}

module.exports = AutomationV2Unsub;