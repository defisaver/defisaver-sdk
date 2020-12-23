const Action = require("../../Action");

const {
  MCD_MONITOR_ADDR,
} = require("../../constants");

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
  constructor(vaultId, amount, to, mcdManager = MCD_MONITOR_ADDR) {
    super('McdGenerate', '0x0', ['uint256','uint256','address','address'], [...arguments]);
  }
}

module.exports = MakerGenerateAction;
