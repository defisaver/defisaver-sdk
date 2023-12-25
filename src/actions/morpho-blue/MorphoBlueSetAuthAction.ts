import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 *
 * @category
 */
export class MorphoAaveV3SetAuthAction extends Action {
  /**
   */
  constructor() {
    super(
      'MorphoAaveV3SetAuth',
      getAddr('MorphoAaveV3SetAuth'),
      [
        'uint256',
        'address',
        'bool',
      ],
      [],
    );
  }
}