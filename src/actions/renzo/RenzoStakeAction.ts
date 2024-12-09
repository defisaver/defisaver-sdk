import { getAssetInfo } from '@defisaver/tokens';
import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';
import { requireAddress } from '../../utils/general';

/**
 * RenzoStakeAction - Supplies ETH (action receives WETH) to Renzo for ETH2 Staking. Receives ezETH in return
 *
 * @category Renzo
 */
export class RenzoStakeAction extends Action {
  /**
   * @param amount - amount of WETH to pull
   * @param from - address from which to pull WETH from
   * @param to - address where received ezETH will be sent to
   */
  constructor(amount:uint256, from:EthAddress, to:EthAddress) {
    requireAddress(to);
    super(
      'RenzoStake', getAddr('RenzoStake'), ['uint256', 'address', 'address'], [amount, from, to],
    );
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
    ];
  }

  async getAssetsToApprove() {
    return [{ asset: getAssetInfo('WETH').address, owner: this.args[1] }];
  }
}