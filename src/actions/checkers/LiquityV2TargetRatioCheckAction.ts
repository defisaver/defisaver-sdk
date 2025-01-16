import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { uint8, uint256, EthAddress } from '../../types';

/**
 * LiquityV2TargetRatioCheckAction - Checks liquity target ratio for user position and reverts if faulty
 *
 * @category Checkers
 */
export class LiquityV2TargetRatioCheckAction extends Action {
  /**
   * @param market Address of the market
   * @param troveId Trove id of the user
   * @param targetRatio The ratio user want to be at
   */
  constructor(market: EthAddress, troveId: uint256, ratioState:uint8, targetRatio:uint256) {
    super(
      'LiquityV2RatioCheck',
      getAddr('Empty'),
      ['address', 'uint256', 'uint256'],
      [market, troveId, targetRatio],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
    ];
  }
}