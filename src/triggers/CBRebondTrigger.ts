import { Action } from '../Action';
import { getAddr } from '../addresses';
import { uint256 } from '../types';

/**
 *
 *
 * @category Triggers
 */
export class CBRebondTrigger extends Action {
  constructor(bondID:uint256) {
    super('CBRebondTrigger', getAddr('CBRebondTrigger'), ['uint256'], [bondID]);
  }
}