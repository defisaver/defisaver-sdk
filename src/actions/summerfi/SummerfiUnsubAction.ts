import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { uint256 } from '../../types';

/**
 * @category Summerfi
 */
export class SummerfiUnsubAction extends Action {
  /**
   * @param cdpIds Array of CDP IDs to remove approval for
   * @param triggerIds Array of Trigger IDs that correspond to CDP IDs
   */
  constructor(
    cdpIds: uint256[],
    triggerIds: uint256[],
  ) {
    super(
      'SummerfiUnsub',
      getAddr('SummerfiUnsub'),
      ['uint256[]', 'uint256[]'],
      [cdpIds, triggerIds],
    );
    this.mappableArgs = [
      this.args[0],
      this.args[1],
    ];
  }
}