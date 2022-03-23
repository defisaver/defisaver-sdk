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
    super('McdMerge', getAddr('McdMerge'), [['uint256','uint256','address']], [[srcVaultId, destVaultId, mcdManager]]);

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
      this.args[0][2],
    ];
  }
}

module.exports = MakerMergeAction;
