import { getAssetInfo } from '@defisaver/tokens';
import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';
import { requireAddress } from '../../utils/general';

/**
 * LidoStakeAction - Receives WETH, transforms it to ETH then sends it to Lido staking contract receiving stETH in return
 *
 * @category Lido
 */
export class LidoStakeAction extends Action {
  /**
   * @param amount amount of WETH to pull and stake
   * @param from WETH will be taken from this address
   * @param to stETH will be sent to this address
   */
  constructor(amount:uint256, from:EthAddress, to:EthAddress) {
    requireAddress(to);
    super('LidoStake', getAddr('LidoStake'), ['uint256', 'address', 'address'], [amount, from, to]);
  }

  async getAssetsToApprove() {
    return [{ asset: getAssetInfo('WETH').address, owner: this.args[1] }];
  }
}