const Action = require("../../Action");

const { getAddr } = require('../../addresses.js');

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
    super('McdGenerate', getAddr('McdGenerate'), ['uint256','uint256','address','address'], [...arguments]);
  }
}

module.exports = MakerGenerateAction;
