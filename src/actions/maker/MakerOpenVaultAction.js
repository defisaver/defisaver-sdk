const Action = require("../../Action");

const { getAddr } = require('../../addresses.json');

/**
 * MakerOpenVaultAction
 */
class MakerOpenVaultAction extends Action {
  /**
   * @param joinAddr {String}
   * @param mcdManager {String}
   */
  constructor(joinAddr, mcdManager) {
    super('McdOpen', getAddr('McdOpen'), ['address','address'], [...arguments]);
  }
}

module.exports = MakerOpenVaultAction;
