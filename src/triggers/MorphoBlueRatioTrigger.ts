import { Action } from '../Action';
import { getAddr } from '../addresses';
import {
  EthAddress, bytes32, uint256, uint8,
} from '../types';

/**
 *
 *
 * @category Triggers
 */
export class MorphoBlueRatioTrigger extends Action {
  constructor(
    marketId:bytes32,
    user:EthAddress,
    ratio:uint256,
    state:uint8,
  ) {
    super(
      'MorphoBlueRatioTrigger',
      getAddr('Empty'),
      [['bytes32', 'address', 'uint256', 'uint8']],
      [[marketId, user, ratio, state]]);
  }
}
