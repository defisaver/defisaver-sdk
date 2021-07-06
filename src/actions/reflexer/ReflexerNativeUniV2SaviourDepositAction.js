const Action = require("../../Action");

const { getAddr } = require('../../addresses.js');

/**
 * ReflexerNativeUniV2SaviourDepositAction - 
 */
class ReflexerNativeUniV2SaviourDepositAction extends Action {
  /**
   * @param from {EthAddress}
   * @param safeId {SafeId}
   * @param lpTokenAmount {string}
   * @param lpTokenAddress {string}
   */
  constructor(from, safeId, lpTokenAmount, lpTokenAddress) {
    super('ReflexerNativeUniV2SaviourDeposit', getAddr('ReflexerNativeUniV2SaviourDeposit'), [['address','uint256','uint256', 'address']], [[from, safeId, lpTokenAmount, lpTokenAddress]]);
    this.mappableArgs = [
        this.args[0][0],
        this.args[0][2],
      ];
}

  async getAssetsToApprove() {
    return [{asset: this.args[0][3], owner: this.args[0][0]}];
  }

}

module.exports = ReflexerNativeUniV2SaviourDepositAction;