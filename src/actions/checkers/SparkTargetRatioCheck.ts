import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { uint256 } from '../../types';

/**
 * SparkTargetRatioCheck - SparkRatioCheckAction - Checks spark ratio for users proxy position and reverts if faulty
 *
 * @category Checkers
 */
export class SparkTargetRatioCheck extends Action {
  /**
     * @param targetRatio The ratio user want to be at
     */
  constructor(targetRatio: uint256) {
    super('SparkTargetRatioCheck', getAddr('SparkTargetRatioCheck'), ['uint256'], [targetRatio]);

    this.mappableArgs = [
      this.args[0],
    ];
  }
}