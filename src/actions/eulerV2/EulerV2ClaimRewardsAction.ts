import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * EulerV2ClaimRewardsAction - Claim rewards on EulerV2
 *
 * @category EulerV2
 */
export class EulerV2ClaimRewardsAction extends Action {
  /**
   * @param to Where to send claimed tokens
   * @param claimAll Whether to claim rewards from all timestamp locks
   * @param allowRemainderLoss Whether to allow loss of remainder tokens. If false, if there is some remainder, tx will revert on EulerV2
   * @param lockTimestamps The timestamps of the locks to claim rewards from. Only used if claimAll is false
   */
  constructor(
    to:EthAddress,
    claimAll:boolean,
    allowRemainderLoss:boolean,
    lockTimestamps:Array<uint256>,
  ) {
    super(
      'EulerV2ClaimRewards',
      getAddr('Empty'),
      ['address', 'bool', 'bool', 'uint256[]'],
      [to, claimAll, allowRemainderLoss, lockTimestamps],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
    ];
  }
}
