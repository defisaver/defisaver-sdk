import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress } from '../../types';

/**
 * LiquityV2SPClaimCollAction - Claims remaining collateral gains for a user with no deposit
 *
 * @category LiquityV2
 */
export class LiquityV2SPClaimCollAction extends Action {
  /**
   * @param market liquity address registry for the market
   * @param to address to which to send the claimed collateral gains
   */
  constructor(
    market: EthAddress,
    to: EthAddress,
  ) {
    super(
      'LiquityV2SPClaimColl',
      getAddr('LiquityV2SPClaimColl'),
      [
        'address',
        'address',
      ],
      [
        market,
        to,
      ],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
    ];
  }
}
