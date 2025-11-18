import { Action } from '../Action';
import { getAddr } from '../addresses';
import { EthAddress, uint256, uint8 } from '../types';

/**
 * Trigger contract that verifies if current token price ratio is outside of given range specified during subscription
 * @category Triggers
 */
export class MorphoBluePriceRangeTrigger extends Action {
  /**
   * @param loanToken - MarketParams loanToken
   * @param collateralToken -  MarketParams collateralToken
   * @param oracle -  MarketParams oracle
   * @param lowerPrice - The lower price of the range
   * @param upperPrice - The upper price of the range
   */
  constructor(
    loanToken:EthAddress,
    collateralToken:EthAddress,
    oracle:EthAddress,
    lowerPrice:uint256,
    upperPrice:uint256,
  ) {
    super(
      'MorphoBluePriceRangeTrigger',
      getAddr('Empty'),
      [['address', 'address', 'address', 'uint256', 'uint256']],
      [[oracle, collateralToken, loanToken, lowerPrice, upperPrice]],
    );
  }
}
