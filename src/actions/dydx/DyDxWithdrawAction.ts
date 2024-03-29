import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * DyDxWithdrawAction - Withdraw token from an DyDx position
 *
 * @category DyDx
 */
export class DyDxWithdrawAction extends Action {
  /**
   * @param tokenAddr
   * @param amount
   * @param to Tokens will be withdrawn to this address
   */
  constructor(tokenAddr:EthAddress, amount:uint256, to:EthAddress) {
    requireAddress(to);
    super('DyDxWithdraw', getAddr('DyDxWithdraw'), ['address', 'uint256', 'address'], [tokenAddr, amount, to]);
  }
}