import { getAssetInfo } from '@defisaver/tokens';
import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * LiquityV2SPDepositAction - Deposits into the Stability Pool (SP) and optionally claims gains
 *
 * @category LiquityV2
 */
export class LiquityV2SPDepositAction extends Action {
  /**
   * @param market liquity address registry for the market
   * @param from address from which to take the deposited BOLD
   * @param boldGainTo address to send any claimed BOLD gains
   * @param collGainTo address to send any claimed collateral gains
   * @param amount BOLD amount to deposit into the Stability Pool
   * @param doClaim whether to claim BOLD and collateral gains before depositing
   */
  constructor(
    market: EthAddress,
    from: EthAddress,
    boldGainTo: EthAddress,
    collGainTo: EthAddress,
    amount: uint256,
    doClaim: boolean,
  ) {
    super(
      'LiquityV2SPDeposit',
      getAddr('LiquityV2SPDeposit'),
      [
        'address',
        'address',
        'address',
        'address',
        'uint256',
        'bool',
      ],
      [
        market,
        from,
        boldGainTo,
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
      this.args[5],
    ];
  }

  async getAssetsToApprove() {
    return [{ asset: getAssetInfo('BOLD').address, owner: this.args[1] }];
  }
}
