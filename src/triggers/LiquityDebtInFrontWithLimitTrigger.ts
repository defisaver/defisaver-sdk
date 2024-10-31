import { Action } from '../Action';
import { getAddr } from '../addresses';
import { EthAddress, uint256, uint8 } from '../types';

/**
 *
 *
 * @category Triggers
 */
export class LiquityDebtInFrontWithLimitTrigger extends Action {
  constructor(troveOwner:EthAddress, debtInFront:uint256) {
    super(
      'LiquityDebtInFrontWithLimitTrigger',
      getAddr('Empty'),
      ['address', 'uint256'],
      [troveOwner, debtInFront],
    );
  }
}
