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
   */
  constructor(vaultId, amount, joinAddr, from) {
    super('McdSupply', '0x0', ['uint256','uint256','address','address'], [...arguments]);
  }
}

module.exports = MakerSupplyAction;
