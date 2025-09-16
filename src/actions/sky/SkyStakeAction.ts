import { Action } from '../../Action';
import { uint256, EthAddress } from '../../types';
import { getAddr } from '../../addresses';

/**
 * SkyStakeAction
 *
 * @category Sky
 */
export class SkyStakeAction extends Action {
  /**
   * @param stakingContract
   * @param stakingToken
   * @param amount
   * @param from
   */
  constructor(stakingContract:EthAddress, stakingToken:EthAddress, amount:uint256, from:EthAddress) {
    super('SkyStake', getAddr('SkyStake'), ['address', 'address', 'uint256', 'address'], [stakingContract, stakingToken, amount, from]);
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
    ];
  }

  async getAssetsToApprove() {
    return [{ asset: this.args[1], owner: this.args[3] }];
  }
}