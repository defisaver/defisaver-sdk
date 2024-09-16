import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * EulerV2PaybackAction - Payback debt assets to a Euler vault
 *
 * @category EulerV2
 */
export class EulerV2PaybackAction extends Action {
  tokenForApproval: EthAddress;

  /**
   * @param vault The address of the vault
   * @param tokenAddress Underlying token address
   * @param account The address of the Euler account, defaults to user's wallet
   * @param from The address from which to pull tokens to be paid back
   * @param amount The amount of assets to pay back (uint256.max for full debt repayment)
   * @param disableController Whether to disable the controller if full debt repayment
   */
  constructor(
    vault: EthAddress,
    tokenAddress: EthAddress,
    account: EthAddress,
    from: EthAddress,
    amount: uint256,
    disableController: boolean,
  ) {
    super(
      'EulerV2Payback',
      getAddr('EulerV2Payback'),
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

    this.tokenForApproval = tokenAddress;
  }

  async getAssetsToApprove() {
    return [{ asset: this.tokenForApproval, owner: this.args[2] }];
  }
}
