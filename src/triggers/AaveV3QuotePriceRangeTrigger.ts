import { Action } from '../Action';
import { getAddr } from '../addresses';
import { EthAddress, uint256 } from '../types';

/**
 * AaveV3QuotePriceRangeTrigger
 * @param baseTokenAddr - The address of the base token
 * @param quoteTokenAddr - The address of the quote token
 * @param lowerPrice - The lower price of the range
 * @param upperPrice - The upper price of the range
 * @category Triggers
 */
export class AaveV3QuotePriceRangeTrigger extends Action {
  constructor(
    baseTokenAddr: EthAddress,
    quoteTokenAddr: EthAddress,
    lowerPrice: uint256,
    upperPrice: uint256,
  ) {
    super(
      'AaveV3QuotePriceRangeTrigger',
      getAddr('Empty'),
      [['address', 'address', 'uint256', 'uint256']],
      [[baseTokenAddr, quoteTokenAddr, lowerPrice, upperPrice]],
    );
  }
}
