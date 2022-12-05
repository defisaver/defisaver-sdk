import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { uint256 } from '../../types';

/**
 * CBCreateRebondSubAction - Subscribes to CB Rebond Strategy
 *
 * @category ChickenBonds
 */
export class CBCreateRebondSubAction extends Action {
  /**
   * @param bondId {string} Id of the bond in the strategy
   */
  constructor(bondId:uint256) {
    super('CBCreateRebondSubAction', getAddr('CBCreateRebondSubAction'), ['uint256'], [bondId]);
  }
}