import { Action } from '../Action';
import { getAddr } from '../addresses';
import { EthAddress, uint256, uint8 } from '../types';

/**
 *
 *
 * @category Triggers
 */
export class SparkRatioTrigger extends Action {
  constructor(user:EthAddress, market:EthAddress, ratio:uint256, state:uint8) {
    super('SparkRatioTrigger', getAddr('Empty'), [['address', 'address', 'uint256', 'uint8']], [[user, market, ratio, state]]);
  }
}
