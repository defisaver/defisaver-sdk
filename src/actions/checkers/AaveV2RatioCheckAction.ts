import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { uint8, uint256 } from '../../types';

/**
 * AaveV2RatioCheckAction - Checks aave 2 ratio for users proxy position and reverts if faulty
 *
 * @category Checkers
 */
export class AaveV2RatioCheckAction extends Action {
  /**
   * @param ratioState If it should lower/higher
   * @param targetRatio The ratio user want to be at
   */
  constructor(ratioState:uint8, targetRatio:uint256) {
    super('AaveV2RatioCheck', getAddr('AaveV2RatioCheck'), ['uint8', 'uint256'], [ratioState, targetRatio]);

    this.mappableArgs = [
      this.args[0],
      this.args[1],
    ];
  }
}