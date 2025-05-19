import { getAssetInfo } from '@defisaver/tokens';
import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * LiquityV2PaybackLegacyAction - Pays back BOLD to a trove on first (legacy) LiquityV2 deployment
 *
 * @category LiquityV2
 */
export class LiquityV2PaybackLegacyAction extends Action {
  /**
   * @param market liquity address registry for the market
   * @param from address from which to take the BOLD for payback
   * @param troveId id of the trove to pay back to
   * @param amount BOLD amount to pay back
   */
  constructor(
    market: EthAddress,
    from: EthAddress,
    troveId: uint256,
    amount: uint256,
  ) {
    super(
      'LiquityV2PaybackLegacy',
      getAddr('LiquityV2PaybackLegacy'),
      [
        'address',
        'address',
        'uint256',
        'uint256',
      ],
      [
        market,
        from,
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

  async getAssetsToApprove() {
    return [{ asset: getAssetInfo('BOLD Legacy').address, owner: this.args[1] }];
  }
}
