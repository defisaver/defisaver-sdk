import { Action } from '../Action';
import { getAddr } from '../addresses';
import { EthAddress, uint256, uint8 } from '../types';

/**
 * AaveV4RatioTrigger - Triggers when the user's ratio is over/under a subbed ratio.
 *
 * @category Triggers
 */
export class AaveV4RatioTrigger extends Action {
  constructor(
    user:EthAddress,
    spoke:EthAddress,
    ratio:uint256,
    state:uint8,
  ) {
    super(
      'AaveV4RatioTrigger',
      getAddr('Empty'),
      [['address', 'address', 'uint256', 'uint8']],
      [[user, spoke, ratio, state]],
    );
  }
}
