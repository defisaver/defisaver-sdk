import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { uint8, uint256, EthAddress } from '../../types';

/**
 * CompoundV2RatioCheckAction - Checks comp V2 ratio for user position and reverts if faulty
 *
 * @category Checkers
 */
export class CompoundV2RatioCheckAction extends Action {
  /**
   * @param ratioState If it should lower/higher
   * @param targetRatio The ratio user want to be at
   */
  constructor(ratioState:uint8, targetRatio:uint256) {
    super('CompV2RatioCheck', getAddr('CompV2RatioCheck'), ['uint8', 'uint256'], [ratioState, targetRatio]);

    this.mappableArgs = [
      this.args[0],
      this.args[1],
    ];
  }
}