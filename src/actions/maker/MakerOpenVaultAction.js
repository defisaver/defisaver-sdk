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
    super('McdOpen', '0x5D1D78fFBef7bE0F936c169fd570326deAA45886', ['address','address'], [...arguments]);
  }
}

module.exports = MakerOpenVaultAction;
