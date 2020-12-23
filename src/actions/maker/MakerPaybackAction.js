const Action = require("../../Action");

const {
  MCD_MONITOR_ADDR,
} = require("../../constants");

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
  constructor(vaultId, amount, from, mcdManager = MCD_MONITOR_ADDR) {
    super('McdPayback', '0x0', ['uint256','uint256','address','address'], [...arguments]);
  }
}

module.exports = MakerPaybackAction;
