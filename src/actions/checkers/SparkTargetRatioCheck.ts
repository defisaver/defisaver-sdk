import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * SparkTargetRatioCheck - SparkRatioCheckAction - Checks spark ratio for users proxy position and reverts if faulty
 *
 * @category Checkers
 */
export class SparkTargetRatioCheck extends Action {
  /**
     * @param targetRatio The ratio user want to be at
     * @param market Address of the market
     */
  constructor(targetRatio: uint256, market: EthAddress) {
    super('SparkTargetRatioCheck', getAddr('Empty'), ['uint256', 'address'], [targetRatio, market]);

    this.mappableArgs = [
      this.args[0],
      this.args[1],
    ];
  }
}