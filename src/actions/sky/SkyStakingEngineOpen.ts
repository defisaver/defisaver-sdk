import { Action } from '../../Action';
import { EthAddress } from '../../types';
import { getAddr } from '../../addresses';

/**
 * SkyStakingEngineOpenAction
 *
 * @category Sky
 */
export class SkyStakingEngineOpenAction extends Action {
  /**
   * @param stakingContract
   */
  constructor(stakingContract: EthAddress) {
    super(
      'SkyStakingEngineOpen',
      getAddr('SkyStakingEngineOpen'),
      ['address'],
      [stakingContract],
    );
    this.mappableArgs = [
      this.args[0],
    ];
  }
}
