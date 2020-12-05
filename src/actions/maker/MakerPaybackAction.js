const Action = require("../../Action");

/**
 * MakerPaybackAction - Payback dai to a Vault
 */
class MakerPaybackAction extends Action {
  /**
   * @param vaultId {String}
   * @param amount {String}
   * @param from {String}
   */
  constructor(vaultId, amount, from) {
    super('MakerPayback', '0x0', ['uint256','uint256','address'], [...arguments]);
  }
}

module.exports = MakerPaybackAction;
