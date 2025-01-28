import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * LiquityV2StakeAction -
 *
 * @category LiquityV2
 */
export class LiquityV2StakeAction extends Action {
  tokenForApproval: EthAddress;

  /**
   * @param lqtyAmountToStake amount of LQTY being staked
   * @param from address from which to pull LQTY token
   * @param rewardRecipient lusd and eth rewards recipient address
   */
  constructor(
    lqtyAmountToStake: uint256,
    from: EthAddress,
    rewardRecipient: EthAddress,
  ) {
    super(
      'LiquityV2Stake',
      getAddr('LiquityV2Stake'),
      [
        'uint256',
        'address',
        'address',
      ],
      [
        lqtyAmountToStake,
        from,
        rewardRecipient,
      ],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
    ];

    this.tokenForApproval = '0x6DEA81C8171D0bA574754EF6F8b412F2Ed88c54D';
  }

  async getAssetsToApprove() {
    return [{ asset: this.tokenForApproval, owner: this.args[0] }];
  }
}
