import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * EulerV2PullDebtAction - Pull debt from one Euler account to another
 *
 * @category EulerV2
 */
export class EulerV2PullDebtAction extends Action {
  /**
   * @param vault The address of the Euler vault
   * @param account The address of the Euler account taking the debt, defaults to user's wallet
   * @param from The address of the Euler account from which debt is pulled
   * @param amount The amount of debt to be pulled (uint256.max for full debt pull)
   * @param enableAsController Whether to enable borrow vault as controller for account. Can be skipped only if the vault is already enabled as controller
   */
  constructor(
    vault: EthAddress,
    account: EthAddress,
    from: EthAddress,
    amount: uint256,
    enableAsController: boolean,
  ) {
    super(
      'EulerV2PullDebt',
      getAddr('EulerV2PullDebt'),
      ['address', 'address', 'address', 'uint256', 'bool'],
      [vault, account, from, amount, enableAsController],
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
