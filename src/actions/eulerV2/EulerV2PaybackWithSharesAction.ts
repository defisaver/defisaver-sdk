import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * EulerV2PaybackWithSharesAction - Payback debt asset to a Euler vault using share tokens
 *
 * @category EulerV2
 */
export class EulerV2PaybackWithSharesAction extends Action {
  /**
   * @param vault The address of the vault
   * @param account The address of the Euler account for which debt is paid back, defaults to user's wallet
   * @param from The address of the Euler account for which shares are burned to pay back debt for 'account', defaults to user's wallet
   * @param amount The amount of asset tokens to be paid back (uint256.max for full debt repayment or up to the available deposit shares in 'from' account)
   * @param disableController Whether to disable the controller if full debt repayment
   */
  constructor(
    vault: EthAddress,
    account: EthAddress,
    from: EthAddress,
    amount: uint256,
    disableController: boolean,
  ) {
    super(
      'EulerV2PaybackWithShares',
      getAddr('EulerV2PaybackWithShares'),
      ['address', 'address', 'address', 'uint256', 'bool'],
      [vault, account, from, amount, disableController],
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
