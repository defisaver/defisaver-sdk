import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress } from '../../types';

/**
 * UmbrellaClaimRewardsAction - Claim rewards from staking in Umbrella staking system

 *
 * @category Umbrella
 */
export class UmbrellaClaimRewardsAction extends Action {
  /**
   * @param asset The asset to claim rewards from
   * @param to The address to send the rewards to
   * @param rewards The rewards to claim
   */
  constructor(
    asset: EthAddress,
    to: EthAddress,
    rewards: Array<EthAddress>,
  ) {
    super(
      'UmbrellaClaimRewards',
      getAddr('UmbrellaClaimRewards'),
      ['address', 'address', 'address[]'],
      [asset, to, rewards],
    );
    this.mappableArgs = [
      this.args[0],
      this.args[1],
    ];
  }
}
