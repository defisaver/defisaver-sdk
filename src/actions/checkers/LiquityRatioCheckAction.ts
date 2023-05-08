import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { uint8, uint256 } from '../../types';

/**
 * LiquityRatioCheckAction - Checks liquity ratio for user position and reverts if faulty
 *
 * @category Checkers
 */
export class LiquityRatioCheckAction extends Action {
  /**
   * @param ratioState If it should lower/higher
   * @param targetRatio The ratio user want to be at
   */
  constructor(ratioState:uint8, targetRatio:uint256) {
    super('LiquityRatioCheck', getAddr('LiquityRatioCheck'), ['uint8', 'uint256'], [ratioState, targetRatio]);

    this.mappableArgs = [
      this.args[0],
      this.args[1],
    ];
  }
}