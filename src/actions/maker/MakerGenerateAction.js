const Action = require("../../Action");

/**
 * MakerGenerateAction - Generated Dai from a Vault
 */
class MakerGenerateAction extends Action {
  /**
   * @param vaultId {String}
   * @param amount {String}
   * @param to {String}
   */
  constructor(joinAddr) {
    super('McdGenerate', '0x0', ['uint256','uint256','address'], [...arguments]);
  }
}

module.exports = MakerGenerateAction;
