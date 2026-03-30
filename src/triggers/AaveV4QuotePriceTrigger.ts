import { Action } from '../Action';
import { getAddr } from '../addresses';
import { EthAddress, uint256, uint8 } from '../types';

/**
 * AaveV4QuotePriceTrigger - Verifies if current token price ratio for aaveV4 spoke is over/under a subbed price ratio.
 *
 * @category Triggers
 */
export class AaveV4QuotePriceTrigger extends Action {
  constructor(
    spoke:EthAddress,
    baseTokenId:uint256,
    quoteTokenId:uint256,
    price:uint256,
    state:uint8,
  ) {
    super(
      'AaveV4QuotePriceTrigger',
      getAddr('Empty'),
      [['address', 'uint256', 'uint256', 'uint256', 'uint8']],
      [[spoke, baseTokenId, quoteTokenId, price, state]],
    );
  }
}
