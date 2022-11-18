import { Action } from '../Action';
import { getAddr } from '../addresses';
import { uint256 } from '../types';

/**
 *
 *
 * @category Triggers
 */
export class GasPriceTrigger extends Action {
  constructor(maxGasPrice:uint256) {
    super('GasPriceTrigger', getAddr('GasPriceTrigger'), ['uint256'], [maxGasPrice]);
  }
}