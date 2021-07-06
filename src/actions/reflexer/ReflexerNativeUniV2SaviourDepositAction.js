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
   */
  constructor(from, safeId, lpTokenAmount, lpTokenAddress) {
    super('ReflexerNativeUniV2SaviourDeposit', getAddr('ReflexerNativeUniV2SaviourDeposit'), [['address','uint256','uint256']], [[from, safeId, lpTokenAmount]]);
    this.mappableArgs = [
        this.args[0][0],
        this.args[0][2],
      ];
}

  async getAssetsToApprove() {
    const RAI_WETH_UNI_V2_LP_TOKEN_ADDR = '0x8aE720a71622e824F576b4A8C03031066548A3B1';
    return [{asset: RAI_WETH_UNI_V2_LP_TOKEN_ADDR, owner: this.args[0][0]}];
  }

}

module.exports = ReflexerNativeUniV2SaviourDepositAction;