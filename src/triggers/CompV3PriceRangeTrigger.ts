import { Action } from '../Action';
import { getAddr } from '../addresses';
import { EthAddress, uint256 } from '../types';

/**
 *
 *
 * @category Triggers
 */
export class CompV3PriceRangeTrigger extends Action {
  constructor(market:EthAddress, collToken:EthAddress, lowerPrice:uint256, upperPrice:uint256) {
    super(
      'CompV3PriceRangeTrigger',
      getAddr('Empty'),
      [['address', 'address', 'uint256', 'uint256']],
      [[market, collToken, lowerPrice, upperPrice]],
    );
  }
}
