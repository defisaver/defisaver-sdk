const Action = require("../../Action");
const {requireAddress} = require("../../utils/general");

const { getAddr } = require('../../addresses.js');

/**
 * ReflexerWithdrawAction - Withdraw token from a Safe
 */
class ReflexerWithdrawAction extends Action {
  /**
   * @param vaultId {SafeId}
   * @param amount {string}
   * @param adapterAddr {EthAddress}
   * @param to {EthAddress}
   */
  constructor(safeId, amount, adapterAddr, to) {
    requireAddress(to);
    super('ReflexerWithdraw', getAddr('ReflexerWithdraw'), [['uint256','uint256','address','address']], [[safeId, amount, adapterAddr, to]]);
  }
}

module.exports = ReflexerWithdrawAction;
