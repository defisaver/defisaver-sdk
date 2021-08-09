const Action = require("../../Action");

const { getAddr } = require('../../addresses.js');

/**
 * ReflexerNativeUniV2SaviourDepositAction - Deposit lpToken in the contract in order to provide cover for a specific SAFE managed by the SAFE Manager
 */
class ReflexerNativeUniV2SaviourDepositAction extends Action {
  /**
   * @param from {EthAddress}
   * @param safeId {SafeId}
   * @param lpTokenAmount {string}
   */
  constructor(from, safeId, lpTokenAmount) {
    super('ReflexerNativeUniV2SaviourDeposit', getAddr('ReflexerNativeUniV2SaviourDeposit'), [['address','uint256','uint256']], [[from, safeId, lpTokenAmount]]);
    this.mappableArgs = [
        this.args[0][0],
        this.args[0][1],
        this.args[0][2],
      ];
}

  async getAssetsToApprove() {
    const tokenAddress = getAddr('RaiWethUniV2LPToken');
    return [{asset: tokenAddress, owner: this.args[0][0]}];
  }

}

module.exports = ReflexerNativeUniV2SaviourDepositAction;
