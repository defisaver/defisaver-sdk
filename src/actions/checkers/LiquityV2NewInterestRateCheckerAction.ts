import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { uint256, EthAddress } from '../../types';

/**
 * LiquityV2NewInterestRateCheckerAction - Checks new interest rate for user position and reverts if faulty
 *
 * @category Checkers
 */
export class LiquityV2NewInterestRateCheckerAction extends Action {
  /**
   * @param market Address of the market
   * @param troveId Trove id of the user
   * @param interestRateChange The interest rate change to check
   */
  constructor(market: EthAddress, troveId: uint256, interestRateChange: uint256) {
    super(
      'LiquityV2NewInterestRateChecker',
      getAddr('Empty'),
      ['address', 'uint256', 'uint256'],
      [market, troveId, interestRateChange],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
    ];
  }
}
