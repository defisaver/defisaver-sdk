import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * LiquityV2ClaimStakingRewardsAction -
 *
 * @category LiquityV2
 */
export class LiquityV2ClaimStakingRewardsAction extends Action {
  /**
   * @param rewardRecipient
   */
  constructor(
    rewardRecipient: EthAddress,
  ) {
    super(
      'LiquityV2ClaimStakingRewards',
      getAddr('LiquityV2ClaimStakingRewards'),
      [
        'address',
      ],
      [
        rewardRecipient,
      ],
    );

    this.mappableArgs = [
      this.args[0],
    ];
  }
}
