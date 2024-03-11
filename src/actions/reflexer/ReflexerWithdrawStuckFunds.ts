import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * ReflexerWithdrawStuckFunds - Withdraw stuck funds from a reflexer safe
 *
 * @category Reflexer
 */
export class ReflexerWithdrawStuckFunds extends Action {
  /**
   * @param safeId - The id of the reflexer safe
   * @param to - address where RAI will be sent to
   */
  constructor(safeId:uint256, to:EthAddress) {
    requireAddress(to);
    super('ReflexerWithdrawStuckFunds', getAddr('ReflexerWithdrawStuckFunds'), ['uint256', 'address'], [safeId, to]);
  }
}
