import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * AaveV4BorrowAction
 *
 * @category AaveV4Borrow
 */
export class AaveV4BorrowAction extends Action {
  /**
   * @param spoke Address of the spoke.
   * @param onBehalf Address to borrow tokens on behalf of. Defaults to the user's wallet if not provided.
   * @param to Address that will receive the borrowed tokens.
   * @param reserveId Reserve id.
   * @param amount Amount of tokens to borrow.
   */
  constructor(
    spoke: EthAddress,
    onBehalf: EthAddress,
    to: EthAddress,
    reserveId: uint256,
    amount: uint256,
  ) {
    super(
      'AaveV4Borrow',
      getAddr('AaveV4Borrow'),
      ['address', 'address', 'address', 'uint256', 'uint256'],
      [spoke, onBehalf, to, reserveId, amount],
    );
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
      this.args[4],
    ];
  }
}
