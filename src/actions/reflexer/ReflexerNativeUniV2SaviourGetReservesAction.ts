import { Action } from '../../Action';
import { EthAddress, uint256 } from '../../types';
import { getAddr } from '../../addresses';
import { requireAddress } from '../../utils/general';

/**
 * ReflexerNativeUniV2SaviourGetReservesAction - Get back system coins or collateral tokens that were withdrawn from Uniswap and not used to save a specific SAFE
 *
 * @category Reflexer
 */
export class ReflexerNativeUniV2SaviourGetReservesAction extends Action {
  /**
   * @param to
   * @param safeId
   */
  constructor(to:EthAddress, safeId:uint256) {
    requireAddress(to);
    super('ReflexerNativeUniV2SaviourGetReserves', getAddr('ReflexerNativeUniV2SaviourGetReserves'), ['address', 'uint256'], [to, safeId]);
    this.mappableArgs = [
      this.args[0],
    ];
  }
}