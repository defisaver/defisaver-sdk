import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { uint8, uint256, EthAddress } from '../../types';

/**
 * LlamalendRatioCheckAction - Checks llamalend coll ratio for user position and reverts if faulty
 *
 * @category Checkers
 */
export class LlamaLendCollRatioCheckAction extends Action {
  /**
   * @param ratioState If it should lower/higher
   * @param targetRatio The ratio user want to be at
   * @param controllerAddr
   */
  constructor(ratioState:uint8, targetRatio:uint256, controllerAddr: EthAddress) {
    super('LlamaLendCollRatioCheck', getAddr('LlamaLendCollRatioCheck'), ['uint8', 'uint256', 'address'], [ratioState, targetRatio, controllerAddr]);

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
    ];
  }
}