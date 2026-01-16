import { Action } from '../Action';
import { getAddr } from '../addresses';
import { EthAddress, uint256 } from '../types';

/**
 * AaveV4QuotePriceRangeTrigger - Verifies if current token price ratio for aaveV4 spoke is within a subbed price range.
 *
 * @category Triggers
 */
export class AaveV4QuotePriceRangeTrigger extends Action {
  constructor(
    spoke:EthAddress,
    baseTokenId:uint256,
    quoteTokenId:uint256,
    lowerPrice:uint256,
    upperPrice:uint256,
  ) {
    super(
      'AaveV4QuotePriceRangeTrigger',
      getAddr('Empty'),
      [['address', 'uint256', 'uint256', 'uint256', 'uint256']],
      [[spoke, baseTokenId, quoteTokenId, lowerPrice, upperPrice]],
    );
  }
}
