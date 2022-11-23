import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * AaveBorrowAction - Borrow tokens from Aave
 *
 * @category Aave
 */
export class AaveBorrowAction extends Action {
  /**
   * @param market - Market Address
   * @param tokenAddr - Token Address
   * @param amount - Amount to borrow
   * @param rateMode - Borrow rate mode: Stable: 1, Variable: 2
   * @param to - Borrowed tokens will be sent to this address
   * @param onBehalf - Borrowing on behalf of address
   */
  constructor(market:EthAddress, tokenAddr:EthAddress, amount:uint256, rateMode:uint256, to:EthAddress, onBehalf:EthAddress = getAddr('Empty')) {
    requireAddress(to);
    super(
      'AaveBorrow',
      getAddr('AaveBorrow'),
      ['address', 'address', 'uint256', 'uint256', 'address', 'address'],
      [market, tokenAddr, amount, rateMode, to, onBehalf],
    );
  }
}