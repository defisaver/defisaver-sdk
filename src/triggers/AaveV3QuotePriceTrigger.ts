import { Action } from '../Action';
import { getAddr } from '../addresses';
import { EthAddress, uint256, uint8 } from '../types';

/**
 *
 *
 * @category Triggers
 */
export class AaveV3RatioTrigger extends Action {
  constructor(baseTokenAddr:EthAddress, quoteTokenAddr:EthAddress, price:uint256, state:uint8) {
    super('AaveV3QuotePriceTrigger', getAddr('AaveV3QuotePriceTrigger'), [['address', 'address', 'uint256', 'uint8']], [[baseTokenAddr, quoteTokenAddr, price, state]]);
  }
}