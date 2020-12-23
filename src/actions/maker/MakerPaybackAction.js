const Action = require("../../Action");


/**
 * MakerPaybackAction - Payback dai to a Vault
 */
class MakerPaybackAction extends Action {
  /**
   * @param vaultId {String}
   * @param amount {String}
   * @param from {String}
   * @param mcdManager {String}
   */
  constructor(vaultId, amount, from, mcdManager) {
    super('McdPayback', '0xC94D840A5eA787Ea796436BF7aba06e54EBc8138', ['uint256','uint256','address','address'], [...arguments]);
  }
}

module.exports = MakerPaybackAction;
