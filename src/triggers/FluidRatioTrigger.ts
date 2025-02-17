import { Action } from '../Action';
import { getAddr } from '../addresses';
import { EthAddress, uint256, uint8 } from '../types';

/**
 *
 *
 * @category Triggers
 */
export class FluidRatioTrigger extends Action {
  constructor(nftId:EthAddress, ratio:uint256, state:uint8) {
    super(
      'FluidRatioTrigger',
      getAddr('Empty'),
      ['uint256', 'uint256', 'uint8'],
      [nftId, ratio, state],
    );
  }
}
