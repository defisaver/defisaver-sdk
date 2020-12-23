const Action = require("../../Action");


/**
 * MakerSupplyAction - Supply token to a Vault
 */
class MakerSupplyAction extends Action {
  /**
   * @param vaultId {String}
   * @param amount {String}
   * @param joinAddr {String}
   * @param from {String}
   * @param mcdManager {String}
   */
  constructor(vaultId, amount, joinAddr, from, mcdManager) {
    super('McdSupply', '0x0', ['uint256','uint256','address','address','address'], [...arguments]);
  }
}

module.exports = MakerSupplyAction;
