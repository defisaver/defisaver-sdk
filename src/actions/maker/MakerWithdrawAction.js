const Action = require("../../Action");

const { getAddr } = require('../../addresses.json');

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
    super('McdWithdraw', getAddr('McdWithdraw'), ['uint256','uint256','address','address','address'], [...arguments]);
  }
}

module.exports = MakerWithdrawAction;
