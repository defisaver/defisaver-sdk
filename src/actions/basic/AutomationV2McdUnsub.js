const Action = require("@defisaver/sdk/src/Action");
const { getAddr } = require('@defisaver/sdk/src/addresses');

class AutomationV2McdUnsub extends Action {
  constructor(cdpId) {
    super(
      'AutomationV2McdUnsub',
      getAddr('AutomationV2Unsub'),
      [["uint256", "uint256"]],
      [[cdpId, '0']]
    );
  }
}

module.exports = AutomationV2McdUnsub;