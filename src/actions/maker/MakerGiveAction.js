const Action = require("../../Action");

const { getAddr } = require('../../addresses.js');

/**
 * MakerGiveAction - gives a vault to a selected address
 */
class MakerGiveAction extends Action {
  /**
   * @param vaultId {String}
   * @param newOwner {String}
   * @param createProxy {Bool}
   * @param mcdManager {String}
   */
  constructor(vaultId, newOwner, createProxy, mcdManager) {
    super('McdGive', getAddr('McdGive'), ["uint256", "address", "bool", "address"], [...arguments]);
  }
}

module.exports = MakerGiveAction;
