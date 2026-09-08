import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * AaveV4DelegateBorrowAction - Approves a spender to borrow from the specified reserve on behalf of the wallet.
 *
 * @category AaveV4DelegateBorrow
 */
export class AaveV4DelegateBorrowAction extends Action {
  /**
   * @param spoke Address of the spoke.
   * @param reserveId Reserve id.
   * @param spender Address that will receive the borrow allowance.
   * @param amount Amount of borrow allowance.
   */
  constructor(
    spoke: EthAddress,
    reserveId: uint256,
    spender: EthAddress,
    amount: uint256
  ) {
    super(
      'AaveV4DelegateBorrow',
      getAddr('AaveV4DelegateBorrow'),
      ['address', 'uint256', 'address', 'uint256'],
      [spoke, reserveId, spender, amount],
    );
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
    ];
  }
}
