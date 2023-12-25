import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 *
 * @category
 */
export class MorphoAaveV3SetAuthBySigAction extends Action {
  /**
   * @param emodeId
   * @param manager
   * @param isAllowed
   */
  constructor() {
    super(
      'MorphoAaveV3SetAuthBySig',
      getAddr('MorphoAaveV3SetAuthBySig'),
      [
        'uint256',
        'address',
        'bool',
      ],
      [],
    );
  }
}