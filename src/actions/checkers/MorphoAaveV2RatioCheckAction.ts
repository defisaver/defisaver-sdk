import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { uint8, uint256, EthAddress } from '../../types';

/**
 * MorphoAaveV2RatioCheckAction - Checks Morpho-AaveV2 ratio for user position and reverts if faulty
 *
 * @category Checkers
 */
export class MorphoAaveV2RatioCheckAction extends Action {
  /**
   * @param ratioState If it should lower/higher
   * @param targetRatio The ratio user want to be at
   * @param user Address of the user we are checking the ratio for (default to proxy)
   */
  constructor(ratioState:uint8, targetRatio:uint256, user:EthAddress) {
    super('MorphoAaveV2RatioCheck', getAddr('MorphoAaveV2RatioCheck'), ['uint8', 'uint256', 'address'], [ratioState, targetRatio, user]);

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
    ];
  }
}