import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import {
  uint256, bytes, bytes32, uint64,
} from '../../types';

/**
 * Action for updating sub data
 *
 * @category BasicActions
 */
export class UpdateSubAction extends Action {
  /**
   * @param subId id of the subscription in the SubStorage contract
   * @param sub object that contains new sub information
   */
  constructor(subId:uint256, sub:[uint64, boolean, bytes[], bytes32[]]) {
    super('UpdateSub', getAddr('UpdateSub'), ['uint256', '(uint64,bool,bytes[],bytes32[])'], [subId, sub]);

    this.mappableArgs = [
      this.args[0],
    ];
    for (let i = 0; i < this.args[1][3].length; i++) {
      this.mappableArgs.push(this.args[1][3][i]);
    }
  }
}