import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import {
  uint256, bytes, bytes32, uint64,
} from '../../types';

/**
 * Action for creating a sub
 *
 * @category BasicActions
 */
export class CreateSubAction extends Action {
  /**
   * @param sub object that contains new sub information
   */
  constructor(sub:[uint64, boolean, bytes[], bytes32[]]) {
    super('CreateSub', getAddr('CreateSub'), ['(uint64,bool,bytes[],bytes32[])'], [sub]);
  }
}