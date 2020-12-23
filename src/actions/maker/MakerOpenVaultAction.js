const Action = require("../../Action");

/**
 * MakerOpenVaultAction
 */
class MakerOpenVaultAction extends Action {
  /**
   * @param joinAddr {String}
   * @param mcdManager {String}
   */
  constructor(joinAddr, mcdManager) {
    super('McdOpen', '0xdeadbeeddeadbeeddeadbeeddeadbeeddeadbeed', ['address','address'], [...arguments]);
  }
}

module.exports = MakerOpenVaultAction;
