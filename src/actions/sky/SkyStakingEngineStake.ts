import { Action } from '../../Action';
import { uint256, EthAddress } from '../../types';
import { getAddr } from '../../addresses';

/**
 * SkyStakingEngineStakeAction
 *
 * @category Sky
 */
export class SkyStakingEngineStakeAction extends Action {
  /**
   * @param stakingContract
   * @param index
   * @param amount
   * @param from
   */
  constructor(
    stakingContract: EthAddress,
    index: uint256,
    amount: uint256,
    from: EthAddress,
  ) {
    super(
      'SkyStakingEngineStake',
      getAddr('SkyStakingEngineStake'),
      ['address', 'uint256', 'uint256', 'address'],
      [stakingContract, index, amount, from],
    );
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
    ];
  }
}
