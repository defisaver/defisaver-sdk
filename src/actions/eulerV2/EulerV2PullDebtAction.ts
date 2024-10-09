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
   */
  constructor(
    vault: EthAddress,
    account: EthAddress,
    from: EthAddress,
    amount: uint256,
  ) {
    super(
      'EulerV2PullDebt',
      getAddr('EulerV2PullDebt'),
      ['address', 'address', 'address', 'uint256'],
      [vault, account, from, amount],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
    ];
  }
}
