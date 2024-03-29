import { Action } from '../../Action';
import { EthAddress, uint256 } from '../../types';
import { getAddr } from '../../addresses';

/**
 * ReflexerNativeUniV2SaviourDepositAction - Deposit lpToken in the contract in order to provide cover for a specific SAFE managed by the SAFE Manager
 *
 * @category Reflexer
 */
export class ReflexerNativeUniV2SaviourDepositAction extends Action {
  /**
   * @param from
   * @param safeId
   * @param lpTokenAmount
   */
  constructor(from:EthAddress, safeId:uint256, lpTokenAmount:uint256) {
    super('ReflexerNativeUniV2SaviourDeposit', getAddr('ReflexerNativeUniV2SaviourDeposit'), ['address', 'uint256', 'uint256'], [from, safeId, lpTokenAmount]);
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
    ];
  }

  async getAssetsToApprove() {
    const tokenAddress = getAddr('RaiWethUniV2LPToken');
    return [{ asset: tokenAddress, owner: this.args[0] }];
  }
}