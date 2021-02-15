const Action = require("../../Action");

const { getAddr } = require('../../addresses.js');

/**
 * MakerWithdrawAction - Withdraw token from a Vault
 */
class MakerWithdrawAction extends Action {
  /**
   * @param vaultId {VaultId}
   * @param amount {string}
   * @param joinAddr {EthAddress}
   * @param to {EthAddress}
   * @param mcdManager {EthAddress}
   */
  constructor(vaultId, amount, joinAddr, to, mcdManager= getAddr('McdCdpManager')) {
    super('McdWithdraw', getAddr('McdWithdraw'), ['uint256','uint256','address','address','address'], [vaultId, amount, joinAddr, to, mcdManager]);
  }
}

module.exports = MakerWithdrawAction;
