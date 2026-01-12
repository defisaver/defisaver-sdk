import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { uint256 } from '../../types';

/**
 * @category Summerfi
 */
export class SummerfiUnsubV2Action extends Action {
  /**
   * @param triggerIds Array of trigger ID arrays to remove
   * @param triggerData Array of trigger data arrays (must match triggerIds length)
   * @param removeAllowance Array of booleans indicating whether to remove allowance for each trigger group
   */
  constructor(
    triggerIds: uint256[][],
    triggerData: string[][],
    removeAllowance: boolean[],
  ) {
    super(
      'SummerfiUnsubV2',
      getAddr('SummerfiUnsubV2'),
      ['uint256[][]', 'bytes[][]', 'bool[]'],
      [triggerIds, triggerData, removeAllowance],
    );
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
    ];
  }
}
