const Action = require("../../Action");

const { getAddr } = require('../../addresses.js');

/**
 * MakerMergeAction - merged two vaults of the same type
 */
class MakerMergeAction extends Action {
  /**
   * @param srcVaultId {String}
   * @param destVaultId {String}
   * @param mcdManager {String}
   */
  constructor(srcVaultId, destVaultId, mcdManager) {
    super('McdMerge', getAddr('McdMerge'), ['uint256','uint256','address'], [...arguments]);
  }
}

module.exports = MakerMergeAction;
