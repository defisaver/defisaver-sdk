import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * LiquityV2UnstakeAction -
 *
 * @category LiquityV2
 */
export class LiquityV2UntakeAction extends Action {
  /**
   * @param lqtyAmountToUntake amount of LQTY being staked
   * @param to address from which to pull LQTY token
   * @param initiativesToReset lusd and eth rewards recipient address
   */
  constructor(
    lqtyAmountToUntake: uint256,
    to: EthAddress,
    initiativesToReset: Array<EthAddress>,
  ) {
    super(
      'LiquityV2Unstake',
      getAddr('LiquityUnstake'),
      [
        'uint256',
        'address',
        'address[]',
      ],
      [
        lqtyAmountToUntake,
        to,
        initiativesToReset,
      ],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
    ];
  }
}
