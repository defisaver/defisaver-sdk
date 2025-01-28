import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * LiquityV2SPWithdrawAction - Withdraws from the Stability Pool (SP) and optionally claims gains
 *
 * @category LiquityV2
 */
export class LiquityV2SPWithdrawAction extends Action {
  /**
   * @param market liquity address registry for the market
   * @param boldTo address to send any withdrawn BOLD
   * @param collGainTo address to send any claimed collateral gains
   * @param amount BOLD amount to withdraw from the Stability Pool
   * @param doClaim whether to claim BOLD and collateral gains before withdrawing
   */
  constructor(
    market: EthAddress,
    boldTo: EthAddress,
    collGainTo: EthAddress,
    amount: uint256,
    doClaim: boolean,
  ) {
    super(
      'LiquityV2SPWithdraw',
      getAddr('LiquityV2SPWithdraw'),
      [
        'address',
        'address',
        'address',
        'uint256',
        'bool',
      ],
      [
        market,
        boldTo,
        collGainTo,
        amount,
        doClaim,
      ],
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
