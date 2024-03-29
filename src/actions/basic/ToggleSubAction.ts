import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { uint256 } from '../../types';

/**
 *  Sets the state of the sub to active or deactivated
 *
 * @category BasicActions
 */
export class ToggleSubAction extends Action {
  /**
   * @param subId Id of the subscription in the SubStorage contract
   * @param active Set to true to activate action, to false to deactivate
   */
  constructor(subId:uint256, active:boolean) {
    super('ToggleSub', getAddr('ToggleSub'), ['uint256', 'bool'], [subId, active]);
  }
}