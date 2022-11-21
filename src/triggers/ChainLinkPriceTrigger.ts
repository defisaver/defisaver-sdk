import { Action } from '../Action';
import { getAddr } from '../addresses';
import { EthAddress, uint256, uint8 } from '../types';

/**
 *
 *
 * @category Triggers
 */
export class ChainLinkPriceTrigger extends Action {
  constructor(tokenAddr:EthAddress, price:uint256, state:uint8) {
    super('ChainLinkPriceTrigger', getAddr('ChainLinkPriceTrigger'), ['address', 'uint256', 'uint8'], [tokenAddr, price, state]);
  }
}