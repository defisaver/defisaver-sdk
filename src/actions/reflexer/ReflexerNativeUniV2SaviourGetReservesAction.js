const Action = require("../../Action");

const { getAddr } = require('../../addresses.js');

/**
 * ReflexerNativeUniV2SaviourGetReservesAction - Get back system coins or collateral tokens that were withdrawn from Uniswap and not used to save a specific SAFE
 */
class ReflexerNativeUniV2SaviourGetReservesAction extends Action {
  /**
   * @param to {EthAddress}
   * @param safeId {SafeId}
   */
  constructor(to, safeId) {
    super('ReflexerNativeUniV2SaviourGetReserves', getAddr('ReflexerNativeUniV2SaviourGetReserves'), [['address','uint256']], [[to, safeId]]);
    this.mappableArgs = [
        this.args[0][0],
      ];
  }
}

module.exports = ReflexerNativeUniV2SaviourGetReservesAction;
