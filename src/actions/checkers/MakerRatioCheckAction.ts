import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { uint8, uint256 } from '../../types';

/**
 * MakerRatioCheckAction - Checks mcd ratio at end of all actions
 *
 * @category Checkers
 */
export class MakerRatioCheckAction extends Action {
  /**
   * @param ratioState If it should lower/higher
   * @param checkTarget
   * @param targetRatio The ratio user want to be at
   * @param vaultId Id of the vault
   * @param startRatioIndex Index in returnValues where ratio before actions is stored
   */
  constructor(ratioState:uint8, checkTarget:boolean, targetRatio:uint256, vaultId:uint256, startRatioIndex:uint256) {
    super('McdRatioCheck', getAddr('McdRatioCheck'), ['uint8', 'bool', 'uint256', 'uint256', 'uint256'], [ratioState, checkTarget, targetRatio, vaultId, startRatioIndex]);

    this.mappableArgs = [
      this.args[0],
      this.args[2],
      this.args[3],
      this.args[4],
    ];
  }
}