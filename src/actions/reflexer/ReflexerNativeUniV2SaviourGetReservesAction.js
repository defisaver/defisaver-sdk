const Action = require("../../Action");

const { getAddr } = require('../../addresses.js');

/**
 * ReflexerNativeUniV2SaviourGetReservesAction - 
 */
class ReflexerNativeUniV2SaviourGetReservesAction extends Action {
  /**
   * @param to {EthAddress}
   * @param safeId {SafeId}
   */
  constructor(to, safeId) {
    super('ReflexerNativeUniV2SaviourDeposit', getAddr('ReflexerNativeUniV2SaviourDeposit'), [['address','uint256']], [[to, safeId]]);
    this.mappableArgs = [
        this.args[0][0],
      ];
}

  async getAssetsToApprove() {
    return [];
  }

}

module.exports = ReflexerNativeUniV2SaviourGetReservesAction;