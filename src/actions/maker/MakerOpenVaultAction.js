const Action = require("../../Action");

const {
  MCD_MONITOR_ADDR,
} = require("../../constants");

/**
 * MakerOpenVaultAction
 */
class MakerOpenVaultAction extends Action {
  /**
   * @param joinAddr {String}
   * @param mcdManager {String}
   */
  constructor(joinAddr, mcdManager = MCD_MONITOR_ADDR) {
    super('McdOpen', '0xdeadbeeddeadbeeddeadbeeddeadbeeddeadbeed', ['address','address'], [...arguments]);
  }
}

module.exports = MakerOpenVaultAction;
