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
   */
  constructor(
    vault: EthAddress,
    account: EthAddress,
    from: EthAddress,
    amount: uint256,
  ) {
    super(
      'EulerV2PaybackWithShares',
      getAddr('Empty'),
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
