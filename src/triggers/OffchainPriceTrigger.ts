import { Action } from '../Action';
import { getAddr } from '../addresses';
import { uint256, uint8 } from '../types';

/**
 *
 *
 * @category Triggers
 */
export class OffchainPriceTrigger extends Action {
  constructor(limitPrice:uint256, limitType: uint8) {
    super('OffchainPriceTrigger', getAddr('Empty'), ['uint256', 'uint8'], [limitPrice, limitType]);
  }
}
