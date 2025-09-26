import { Action } from '../../Action';
import { uint256, EthAddress } from '../../types';
import { getAddr } from '../../addresses';

/**
 * SkyStakingEngineClaimRewardsAction
 *
 * @category Sky
 */
export class SkyStakingEngineClaimRewardsAction extends Action {
  /**
   * @param stakingContract
   * @param index
   * @param farm
   * @param to
   */
  constructor(
    stakingContract: EthAddress,
    index: uint256,
    farm: EthAddress,
    to: EthAddress,
  ) {
    super(
      'SkyStakingEngineClaimRewards',
      getAddr('SkyStakingEngineClaimRewards'),
      ['address', 'uint256', 'address', 'address'],
      [stakingContract, index, farm, to],
    );
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
    ];
  }
}
