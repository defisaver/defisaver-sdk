const Action = require("../../Action");

/**
 * MakerGenerateAction - Generated Dai from a Vault
 */
class MakerGenerateAction extends Action {
  /**
   * @param vaultId {String}
   * @param amount {String}
   * @param to {String}
   * @param mcdManager {String}
   */
  constructor(vaultId, amount, to, mcdManager) {
    super('McdGenerate', '0x40F0Cf9a9F61251E7f75E59b8dD88fd5d32AA612', ['uint256','uint256','address','address'], [...arguments]);
  }
}

module.exports = MakerGenerateAction;
