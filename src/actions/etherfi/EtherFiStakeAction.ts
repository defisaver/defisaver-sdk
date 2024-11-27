import { getAssetInfo } from '@defisaver/tokens';
import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';
import { requireAddress } from '../../utils/general';

/**
 * EtherFiStakeAction - Receives WETH, transforms it to ETH then sends it to EtherFi staking contract receiving eETH in return or weETH if wrapping is enabled
 *
 * @category EtherFi
 */
export class EtherFiStakeAction extends Action {
  /**
   * @param amount - amount of WETH to pull
   * @param from - address from which to pull WETH from
   * @param to - address where received eETH will be sent to
   * @param shouldWrap - true if received eETH should be wrapped to weETH
   */
  constructor(amount:uint256, from:EthAddress, to:EthAddress, shouldWrap:boolean) {
    requireAddress(to);
    super(
      'EtherFiStake',
      getAddr('EtherFiStake'),
      ['uint256', 'address', 'address', 'bool'],
      [amount, from, to, shouldWrap],
    );
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
    ];
  }

  async getAssetsToApprove() {
    return [{ asset: getAssetInfo('WETH').address, owner: this.args[1] }];
  }
}