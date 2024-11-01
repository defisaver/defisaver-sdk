import { Action } from '../Action';
import { getAddr } from '../addresses';
import { EthAddress, uint256 } from '../types';

/**
 *
 *
 * @category Triggers
 */
export class ShouldClosePriceTrigger extends Action {
  constructor(token:EthAddress, lowerPrice:uint256, upperPrice:uint256) {
    super(
      'ShouldClosePriceTrigger',
      getAddr('Empty'),
      ['address', 'uint256', 'uint256'],
      [token, lowerPrice, upperPrice],
    );
  }
}
