import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * AaveV4DelegateWithdrawAction - Approves a spender to withdraw from the specified reserve on behalf of the wallet.
 *
 * @category AaveV4DelegateWithdraw
 */
export class AaveV4DelegateWithdrawAction extends Action {
  /**
   * @param spoke Address of the spoke.
   * @param reserveId Reserve id.
   * @param spender Address that will receive the withdraw allowance.
   * @param amount Amount of withdraw allowance.
   */
  constructor(
    spoke: EthAddress,
    reserveId: uint256,
    spender: EthAddress,
    amount: uint256,
  ) {
    super(
      'AaveV4DelegateWithdraw',
      getAddr('AaveV4DelegateWithdraw'),
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
