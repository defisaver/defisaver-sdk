import { Action } from '../../Action';
import { uint256, EthAddress } from '../../types';
import { getAddr } from '../../addresses';

/**
 * SkyStakingEngineSelectFarmAction
 *
 * @category Sky
 */
export class SkyStakingEngineSelectFarmAction extends Action {
  /**
   * @param stakingContract
   * @param index
   * @param farm
   */
  constructor(stakingContract: EthAddress, index: uint256, farm: EthAddress) {
    super(
      'SkyStakingEngineSelectFarm',
      getAddr('SkyStakingEngineSelectFarm'),
      ['address', 'uint256', 'address'],
      [stakingContract, index, farm],
    );
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
    ];
  }
}
