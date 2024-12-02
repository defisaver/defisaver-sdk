import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * EulerV2BorrowAction - Borrow assets from an Euler vault
 *
 * @category EulerV2
 */
export class EulerV2BorrowAction extends Action {
  /**
   * @param vault The address of the Euler vault
   * @param account The address of the Euler account, defaults to user's wallet
   * @param receiver The address to receive the borrowed assets
   * @param amount The amount of assets to borrow
   */
  constructor(
    vault: EthAddress,
    account: EthAddress,
    receiver: EthAddress,
    amount: uint256,
  ) {
    super(
      'EulerV2Borrow',
      getAddr('EulerV2Borrow'),
      ['address', 'address', 'address', 'uint256'],
      [vault, account, receiver, amount],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
    ];
  }
}
