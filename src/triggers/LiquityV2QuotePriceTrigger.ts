import { Action } from '../Action';
import { getAddr } from '../addresses';
import { EthAddress, uint256, uint8 } from '../types';

/**
 * @category Triggers
 */
export class LiquityV2QuotePriceTrigger extends Action {
  constructor(market: EthAddress, price:uint256, state:uint8) {
    super(
      'LiquityV2QuotePriceTrigger',
      getAddr('Empty'),
      ['address', 'uint256', 'uint8'],
      [market, price, state],
    );
  }
}