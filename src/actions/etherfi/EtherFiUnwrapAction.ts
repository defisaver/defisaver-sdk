import { getAssetInfo } from '@defisaver/tokens';
import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';
import { requireAddress } from '../../utils/general';

/**
 * EtherFiUnwrapAction - Unwrap weETH and receive eETH
 *
 * @category EtherFi
 */
export class EtherFiUnwrapAction extends Action {
  /**
   * @param amount - amount of weETH to pull
   * @param from - address from which to pull weETH from
   * @param to - address where received eETH will be sent to
   */
  constructor(amount:uint256, from:EthAddress, to:EthAddress) {
    requireAddress(to);
    super('EtherFiUnwrap', getAddr('EtherFiUnwrap'), ['uint256', 'address', 'address'], [amount, from, to]);
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
    ];
  }

  async getAssetsToApprove() {
    return [{ asset: getAssetInfo('weETH').address, owner: this.args[1] }];
  }
}