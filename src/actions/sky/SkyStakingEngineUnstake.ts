import { Action } from '../../Action';
import { uint256, EthAddress } from '../../types';
import { getAddr } from '../../addresses';

/**
 * SkyStakingEngineUnstakeAction
 *
 * @category Sky
 */
export class SkyStakingEngineUnstakeAction extends Action {
  /**
   * @param stakingContract
   * @param index
   * @param amount
   * @param to
   */
  constructor(
    stakingContract: EthAddress,
    index: uint256,
    amount: uint256,
    to: EthAddress,
  ) {
    super(
      'SkyStakingEngineUnstake',
      getAddr('SkyStakingEngineUnstake'),
      ['address', 'uint256', 'uint256', 'address'],
      [stakingContract, index, amount, to],
    );
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
    ];
  }
}
