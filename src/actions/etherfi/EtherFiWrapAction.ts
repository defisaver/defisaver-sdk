import { getAssetInfo } from '@defisaver/tokens';
import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';
import { requireAddress } from '../../utils/general';

/**
 * EtherFiWrapAction -  Wraps eETH into Wrapped eETH (weETH)
 *
 * @category EtherFi
 */
export class EtherFiWrapAction extends Action {
  /**
   * @param amount - amount of eETH to pull
   * @param from - address from which to pull eETH from
   * @param to - address where received weETH will be sent to
   */
  constructor(amount:uint256, from:EthAddress, to:EthAddress) {
    requireAddress(to);
    super(
      'EtherFiWrap',
      getAddr('EtherFiWrap'),
      ['uint256', 'address', 'address'],
      [amount, from, to],
    );
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
    ];
  }

  async getAssetsToApprove() {
    return [{ asset: getAssetInfo('eETH').address, owner: this.args[1] }];
  }
}