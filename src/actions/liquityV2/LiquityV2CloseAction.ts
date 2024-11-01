import { getAssetInfo } from '@defisaver/tokens';
import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import { EthAddress } from '../../types';

/**
 * LiquityV2CloseAction - Closes trove
 *
 * @category LiquityV2
 */
export class LiquityV2CloseAction extends Action {
  /**
   * @param market liquity address registry for the market
   * @param from address from which to take the BOLD
   * @param to address to which to send the collateralToken and WETH gas compensation
   * @param troveId id of the trove to close
   */
  constructor(
    market: EthAddress,
    from: EthAddress,
    to: EthAddress,
    troveId: string,
  ) {
    super(
      'LiquityV2Close',
      getAddr('LiquityV2Close'),
      [
        'address',
        'address',
        'address',
        'uint256',
      ],
      [
        market,
        from,
        to,
        troveId,
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
    return [{ asset: getAssetInfo('BOLD').address, owner: this.args[1] }];
  }
}