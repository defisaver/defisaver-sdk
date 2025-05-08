import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * LiquityV2WithdrawAction - Withdraws collateral from a trove
 *
 * @category LiquityV2
 */
export class LiquityV2WithdrawAction extends Action {
  /**
   * @param market liquity address registry for the market
   * @param to address to which to send the withdrawn collateral
   * @param troveId id of the trove to withdraw from
   * @param amount collateral amount to withdraw
   */
  constructor(
    market: EthAddress,
    to: EthAddress,
    troveId: uint256,
    amount: uint256,
  ) {
    super(
      'LiquityV2Withdraw',
      getAddr('LiquityV2Withdraw'),
      [
        'address',
        'address',
        'uint256',
        'uint256',
      ],
      [
        market,
        to,
        troveId,
        amount,
      ],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
    ];
  }
}
