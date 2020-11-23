const Action = require("../../Action");

/**
 * Test
 */
class MakerOpenVaultAction extends Action {
  /**
   * @param joinAddr {String}
   */
  constructor(joinAddr) {
    super('MCDOpen', '0x0', ['address'], [...arguments]);
  }
}

module.exports = MakerOpenVaultAction;
