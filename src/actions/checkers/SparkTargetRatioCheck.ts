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
     * @param user Address of the user (EOA/SW). This param was added later
     */
  constructor(
    targetRatio: uint256,
    market: EthAddress,
    user: EthAddress = getAddr('Empty'),
  ) {
    super(
      'SparkTargetRatioCheck',
      getAddr('Empty'),
      ['uint256', 'address', 'address'],
      [targetRatio, market, user],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
    ];
  }
}
