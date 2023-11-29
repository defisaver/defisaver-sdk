import { Action } from '../Action';
import { getAddr } from '../addresses';
import { EthAddress, uint256, uint8 } from '../types';

/**
 *
 *
 * @category Triggers
 */
export class CurveUsdCollRatioTrigger extends Action {
  constructor(user:EthAddress, controller:EthAddress, ratio:uint256, state:uint8) {
    super('CurveUsdCollRatioTrigger', getAddr('CurveUsdCollRatioTrigger'), [['address', 'address', 'uint256', 'uint8']], [[user, controller, ratio, state]]);
  }
}