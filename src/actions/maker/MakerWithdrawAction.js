const Action = require("../../Action");


/**
 * MakerWithdrawAction - Withdraw token from a Vault
 */
class MakerWithdrawAction extends Action {
  /**
   * @param vaultId {String}
   * @param amount {String}
   * @param joinAddr {String}
   * @param to {String}
   * @param mcdManager {String}
   */
  constructor(vaultId, amount, joinAddr, to, mcdManager) {
    super('McdWithdraw', '0x0', ['uint256','uint256','address','address','address'], [...arguments]);
  }
}

module.exports = MakerWithdrawAction;
