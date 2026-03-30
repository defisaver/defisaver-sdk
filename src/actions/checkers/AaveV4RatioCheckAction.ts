import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256, uint8 } from '../../types';

/**
 * AaveV4RatioCheckAction - Checks aave V4 ratio for user position
 *
 * @category AaveV4RatioCheck
 */
export class AaveV4RatioCheckAction extends Action {
  /**
   * @param ratioState State of the ratio (IN_BOOST or IN_REPAY)
   * @param targetRatio Target ratio.
   * @param spoke Aave V4 spoke address.
   * @param user User address.
   */
  constructor(
    ratioState: uint8,
    targetRatio: uint256,
    spoke: EthAddress,
    user: EthAddress,
  ) {
    super(
      'AaveV4RatioCheck',
      getAddr('Empty'),
      ['uint8', 'uint256', 'address', 'address'],
      [ratioState, targetRatio, spoke, user],
    );
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
    ];
  }
}
