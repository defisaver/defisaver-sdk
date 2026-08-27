import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { uint8, uint256, EthAddress } from '../../types';

/**
 * SparkRatioCheckAction - Checks spark ratio for users proxy position and reverts if faulty
 *
 * @category Checkers
 */
export class SparkRatioCheckAction extends Action {
  /**
   * @param ratioState If it should lower/higher
   * @param targetRatio The ratio user want to be at
   * @param market Address provider for specific market. This param was added later
   * @param user Address of the user (EOA/SW). This param was added later
   */
  constructor(
    ratioState: uint8,
    targetRatio: uint256,
    market: EthAddress = getAddr('Empty'),
    user: EthAddress = getAddr('Empty'),
  ) {
    super(
      'SparkRatioCheck',
      getAddr('Empty'),
      ['uint8', 'uint256', 'address', 'address'],
      [ratioState, targetRatio, market, user],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
    ];
  }
}
