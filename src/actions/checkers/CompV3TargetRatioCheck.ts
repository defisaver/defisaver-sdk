import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { uint256, EthAddress } from '../../types';

/**
 * CompV3TargetRatioCheckAction - Checks compV3 target ratio for user position and reverts if faulty
 *
 * @category Checkers
 */
export class CompV3TargetRatioCheckAction extends Action {
  /**
   * @param targetRatio The ratio user want to be at
   * @param market Address of the market
   * @param user Address of the user
   */
  constructor(targetRatio:uint256, market: EthAddress, user: EthAddress) {
    super(
      'CompV3TargetRatioCheck',
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