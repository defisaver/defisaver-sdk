import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress } from '../../types';

/**
 * LiquityV2ClaimAction - Claims collateral left from liquidation from a trove
 *
 * @category LiquityV2
 */
export class LiquityV2ClaimAction extends Action {
  /**
   * @param market liquity address registry for the market
   * @param to address to which to send the claimed collateral
   */
  constructor(
    market: EthAddress,
    to: EthAddress,
  ) {
    super(
      'LiquityV2Claim',
      getAddr('LiquityV2Claim'),
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
