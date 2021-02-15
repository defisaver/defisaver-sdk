const Action = require("../../Action");

const { getAddr } = require('../../addresses.js');

/**
 * MakerMergeAction - merged two vaults of the same type
 */
class MakerMergeAction extends Action {
  /**
   * @param srcVaultId {VaultId}
   * @param destVaultId {VaultId}
   * @param mcdManager {EthAddress}
   */
  constructor(srcVaultId, destVaultId, mcdManager = getAddr('McdCdpManager')) {
    super('McdMerge', getAddr('McdMerge'), ['uint256','uint256','address'], [srcVaultId, destVaultId, mcdManager]);
  }
}

module.exports = MakerMergeAction;
