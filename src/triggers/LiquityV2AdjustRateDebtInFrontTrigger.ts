import { Action } from '../Action';
import { getAddr } from '../addresses';
import { EthAddress, uint256 } from '../types';

/**
 * @category Triggers
 */
export class LiquityV2AdjustRateDebtInFrontTrigger extends Action {
  constructor(market: EthAddress, troveId: uint256, criticalDebtInFrontLimit: uint256, nonCriticalDebtInFrontLimit: uint256) {
    super(
      'LiquityV2AdjustRateDebtInFrontTrigger',
      getAddr('Empty'),
      ['address', 'uint256', 'uint256', 'uint256'],
      [market, troveId, criticalDebtInFrontLimit, nonCriticalDebtInFrontLimit],
    );
  }
}