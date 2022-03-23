const Action = require("../../Action");
const {requireAddress} = require("../../utils/general");

const { getAddr } = require('../../addresses.js');

/**
 * MakerWithdrawAction - Withdraw token from a Vault
 */
class MakerWithdrawAction extends Action {
  /**
   * @param vaultId {VaultId}
   * @param amount {string}
   * @param joinAddr {EthAddress}
   * @param to {string}
   * @param mcdManager {EthAddress}
   */
  constructor(vaultId, amount, joinAddr, to, mcdManager = getAddr('McdCdpManager')) {
    requireAddress(to);
    super('McdWithdraw', getAddr('McdWithdraw'), [['uint256','uint256','address','address','address']], [[vaultId, amount, joinAddr, to, mcdManager]]);

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
      this.args[0][2],
      this.args[0][3],
      this.args[0][4],
    ];
  }
}

module.exports = MakerWithdrawAction;
