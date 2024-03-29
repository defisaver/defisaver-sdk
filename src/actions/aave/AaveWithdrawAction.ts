import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * AaveWithdrawAction - Withdraw token from an aave position
 *
 * @category Aave
 */
export class AaveWithdrawAction extends Action {
  /**
   * @param market - Address of market
   * @param tokenAddr - Address of Token
   * @param amount - Token amount
   * @param to - Tokens will be withdrawn to this address
   */
  constructor(market: EthAddress, tokenAddr: EthAddress, amount: uint256, to:EthAddress) {
    requireAddress(to);
    super('AaveWithdraw', getAddr('AaveWithdraw'), ['address', 'address', 'uint256', 'address'], [market, tokenAddr, amount, to]);
  }
}