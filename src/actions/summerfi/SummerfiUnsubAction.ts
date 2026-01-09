import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { uint256 } from '../../types';

/**
 * @category Summerfi
 */
export class SummerfiUnsubAction extends Action {
  /**
   * @param cdpIds Array of CDP IDs to remove approval for
   */
  constructor(
    cdpIds: uint256[],
  ) {
    super(
      'SummerfiUnsub',
      getAddr('SummerfiUnsub'),
      ['uint256[]'],
      [cdpIds],
    );
    this.mappableArgs = [
      this.args[0],
    ];
  }
}