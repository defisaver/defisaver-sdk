import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';
import { requireAddress } from '../../utils/general';

/**
 * UmbrellaStartUnstakeAction - Start un-staking of aTokens or GHO tokens using Umbrella Stake Token
 *
 * @category Umbrella
 */
export class UmbrellaStartUnstakeAction extends Action {
  /**
   * @param stkToken The umbrella stake token.
   */
  constructor(
    stkToken: EthAddress,
  ) {
    super(
      'UmbrellaUnstake',
      getAddr('UmbrellaUnstake'),
      ['address', 'address', 'uint256', 'uint256'],
      [stkToken, getAddr('Empty'), '0', '0'],
    );
    this.mappableArgs = [
      this.args[0],
    ];
  }
}
