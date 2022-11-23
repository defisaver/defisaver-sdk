import { Action } from '../Action';
import { getAddr } from '../addresses';
import { uint256, uint8 } from '../types';

/**
 *
 *
 * @category Triggers
 */
export class UniV3CurrentTickTrigger extends Action {
  constructor(tokenId:uint256, state:uint8) {
    super('UniV3CurrentTickTrigger', getAddr('UniV3CurrentTickTrigger'), ['uint256', 'uint8'], [tokenId, state]);
  }
}