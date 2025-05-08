import { Action } from '../Action';
import { getAddr } from '../addresses';
import { uint256, uint8 } from '../types';

/**
 *
 *
 * @category Triggers
 */
export class ReflexerRatioTrigger extends Action {
  constructor(vaultId:uint256, ratio:uint256, state:uint8) {
    super('ReflexerRatioTrigger', getAddr('Empty'), ['uint256', 'uint256', 'uint8'], [vaultId, ratio, state]);
  }
}
