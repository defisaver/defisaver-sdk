import { Action } from '../Action';
import { getAddr } from '../addresses';
import { EthAddress, uint256 } from '../types';

/**
 *
 *
 * @category Triggers
 */
export class CurveUsdHealthRatioTrigger extends Action {
  constructor(user:EthAddress, controller:EthAddress, ratio:uint256) {
    super('CurveUsdHealthRatioTrigger', getAddr('Empty'), [['address', 'address', 'uint256']], [[user, controller, ratio]]);
  }
}
