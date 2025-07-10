import { Action } from '../Action';
import { getAddr } from '../addresses';
import { EthAddress, uint256, uint8 } from '../types';

/**
 *
 *
 * @category Triggers
 */
export class CompV3PriceTrigger extends Action {
  constructor(market:EthAddress, collToken:EthAddress, price:uint256, state:uint8) {
    super(
      'CompV3PriceTrigger',
      getAddr('Empty'),
      [['address', 'address', 'uint256', 'uint8']],
      [[market, collToken, price, state]],
    );
  }
}
