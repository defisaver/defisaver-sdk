import { Action } from '../Action';
import { getAddr } from '../addresses';
import { EthAddress, uint256, uint8 } from '../types';

/**
 * @category Triggers
 */
export class LiquityV2RatioTrigger extends Action {
  constructor(market: EthAddress, troveId: uint256, ratio:uint256, state:uint8) {
    super(
      'LiquityV2RatioTrigger',
      getAddr('LiquityV2RatioTrigger'),
      ['address', 'uint256', 'uint256', 'uint8'],
      [market, troveId, ratio, state],
    );
  }
}