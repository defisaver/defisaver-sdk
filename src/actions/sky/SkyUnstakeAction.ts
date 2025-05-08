import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { uint256, EthAddress } from '../../types';
import { getAddr } from '../../addresses';

/**
 * SkyStakeAction
 *
 * @category Sky
 */
export class SkyUnstakeAction extends Action {
  /**
   * @param stakingContract
   * @param stakingToken
   * @param amount
   * @param to
   */
  constructor(stakingContract:EthAddress, stakingToken:EthAddress, amount:uint256, to:EthAddress) {
    super('SkyUnstake', getAddr('SkyUnstake'), ['address', 'address', 'uint256', 'address'], [stakingContract, stakingToken, amount, to]);
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
    ];
  }
}