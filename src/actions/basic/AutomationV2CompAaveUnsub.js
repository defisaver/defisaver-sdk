const Action = require("@defisaver/sdk/src/Action");
const { getAddr } = require('@defisaver/sdk/src/addresses');

class AutomationV2CompAaveUnsub extends Action {
  constructor(protocol) {
    super(
      'AutomationV2CompAaveUnsub',
      getAddr('AutomationV2Unsub'),
      [["uint256", "uint256"]],
      [['0', protocol]]
    );
  }
}

module.exports = AutomationV2CompAaveUnsub;