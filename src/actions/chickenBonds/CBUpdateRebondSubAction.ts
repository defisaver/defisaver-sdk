import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { uint256 } from '../../types';

/**
 * CBUpdateRebondSubAction - Updates rebond strategy subscription
 *
 * @category ChickenBonds
 */
export class CBUpdateRebondSubAction extends Action {
  /**
   * @param subId {string} Id of the subscription to update
   * @param bondId {string} Id of the bond in the strategy
   */
  constructor(subId:uint256, bondId:uint256) {
    super('CBUpdateRebondSub', getAddr('CBUpdateRebondSub'), ['uint256', 'uint256'], [subId, bondId]);
  }
}