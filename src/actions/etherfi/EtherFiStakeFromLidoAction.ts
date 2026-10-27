import { getAssetInfo } from '@defisaver/tokens';
import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';
import { requireAddress } from '../../utils/general';

/**
 * EtherFiStakeFromLidoAction - Converts wstETH to weETH through Ether.fi's Lido staking route
 *
 * @category EtherFi
 */
export class EtherFiStakeFromLidoAction extends Action {
  /**
   * @param amount - amount of wstETH to pull
   * @param minAmountOut - minimum amount of weETH to receive
   * @param from - address from which to pull wstETH
   * @param to - address where received weETH will be sent
   */
  constructor(amount:uint256, minAmountOut:uint256, from:EthAddress, to:EthAddress) {
    requireAddress(to);
    super(
      'EtherFiStakeFromLido',
      getAddr('EtherFiStakeFromLido'),
      ['uint256', 'uint256', 'address', 'address'],
      [amount, minAmountOut, from, to],
    );
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
    ];
  }

  async getAssetsToApprove() {
    return [{ asset: getAssetInfo('WSTETH').address, owner: this.args[2] }];
  }
}
