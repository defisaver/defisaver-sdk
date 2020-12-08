const Action = require("../../Action");

/**
 * Test
 */
class MakerOpenVaultAction extends Action {
  /**
   * @param joinAddr {String}
   */
  constructor(joinAddr) {
    super('McdOpen', '0xdeadbeeddeadbeeddeadbeeddeadbeeddeadbeed', ['address'], [...arguments]);
  }
}

module.exports = MakerOpenVaultAction;
