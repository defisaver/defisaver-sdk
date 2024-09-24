import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { uint256, EthAddress } from '../../types';
import { getAddr } from '../../addresses';

/**
 * SkyStakeAction
 *
 * @category Sky
 */
export class SkyClaimRewardsAction extends Action {
  /**
   * @param stakingContract
   * @param stakingToken
   * @param to
   */
  constructor(stakingContract:EthAddress, rewardToken:EthAddress, to:EthAddress) {
    super('SkyClaimRewards', getAddr('SkyClaimRewards'), ['address', 'address', 'address'], [stakingContract, rewardToken, to]);
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
    ];
  }
}