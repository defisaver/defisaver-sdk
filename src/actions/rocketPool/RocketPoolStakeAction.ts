import { getAssetInfo } from '@defisaver/tokens';
import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';
import { requireAddress } from '../../utils/general';

/**
 * RocketPoolStakeAction - Receives WETH, transforms it to ETH, then sends it to Rocket pool staking contract receiving rETH in return minus rocket pool fee
 *
 * @category RocketPool
 */
export class RocketPoolStakeAction extends Action {
  /**
   * @param amount amount of WETH to pull and stake
   * @param from WETH will be taken from this address
   * @param to rETH will be sent to this address
   */
  constructor(amount:uint256, from:EthAddress, to:EthAddress) {
    requireAddress(to);
    super('RocketPoolStake', getAddr('RocketPoolStake'), ['uint256', 'address', 'address'], [amount, from, to]);
  }

  async getAssetsToApprove() {
    return [{ asset: getAssetInfo('WETH').address, owner: this.args[1] }];
  }
}
