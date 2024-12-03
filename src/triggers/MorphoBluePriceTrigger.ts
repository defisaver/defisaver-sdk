import { Action } from '../Action';
import { getAddr } from '../addresses';
import { EthAddress, uint256, uint8 } from '../types';

/**
 * Trigger contract that verifies if current token price ratio is over/under the price ratio specified during subscription
 * @category Triggers
 */
export class MorphoBluePriceTrigger extends Action {
  /**
   * @param loanToken - MarketParams loanToken
   * @param collateralToken -  MarketParams collateralToken
   * @param oracle -  MarketParams oracle
   * @param irm -  MarketParams irm
   * @param lltv -  MarketParams lltv
   * @param price - price of the collateral token in terms of the loan token that represents the triggerable point.
   * @param state - 0 for over, 1 for under
   */
  constructor(
    loanToken:EthAddress,
    collateralToken:EthAddress,
    oracle:EthAddress,
    irm:EthAddress,
    lltv:uint256,
    price:uint256,
    state:uint8,
  ) {
    super(
      'MorphoBluePriceTrigger',
      getAddr('Empty'),
      [['address', 'address', 'address', 'address', 'uint256'], 'uint256', 'uint8'],
      [[loanToken, collateralToken, oracle, irm, lltv], price, state],
    );
  }
}
