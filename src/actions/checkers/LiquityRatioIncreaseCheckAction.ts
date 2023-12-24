import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { uint8, uint256 } from '../../types';

/**
 * LiquityRatioCheckAction - Checks liquity ratio increase for user position and reverts if faulty
 *
 * @category Checkers
 */
export class LiquityRatioIncreaseCheckAction extends Action {
  /**
   * @param targetRatio The ratio user want to be at
   */
  constructor(targetRatioIncrease:uint256) {
    super('LiquityRatioIncreaseCheck', getAddr('LiquityRatioIncreaseCheck'), ['uint256'], [targetRatioIncrease]);

    this.mappableArgs = [
      this.args[0],
    ];
  }
}