const Action = require("../../Action");

const { getAddr } = require('../../addresses.js');

/**
 * ReflexerNativeUniV2SaviourWithdrawAction -  Withdraw lpToken from the contract and provide less cover for a SAFE
 */
class ReflexerNativeUniV2SaviourWithdrawAction extends Action {
  /**
   * @param to {EthAddress}
   * @param safeId {SafeId}
   * @param lpTokenAmount {string}
   */
  constructor(to, safeId, lpTokenAmount) {
    super('ReflexerNativeUniV2SaviourWithdraw', getAddr('ReflexerNativeUniV2SaviourWithdraw'), ['address','uint256','uint256', ], [to, safeId, lpTokenAmount]);
    this.mappableArgs = [
        this.args[0],
        this.args[2],
      ];
  }
}

module.exports = ReflexerNativeUniV2SaviourWithdrawAction;
