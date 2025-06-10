import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';
import { requireAddress } from '../../utils/general';

/**
 * UmbrellaFinalizeUnstakeAction - Finalize un-staking of aTokens or GHO tokens using Umbrella Stake Token
 * This action will always unwrap waTokens to aTokens after un-staking.
 *
 * @category Umbrella
 */
export class UmbrellaFinalizeUnstakeAction extends Action {
  /**
   * @param stkToken The umbrella stake token.
   * @param to The address to which the aToken or GHO will be transferred
   * @param stkAmount The amount of stkToken shares to burn (max.uint to redeem whole balance, 0 to start cooldown period)
   * @param minAmountOut The minimum amount of aToken or GHO to be received
   */
  constructor(
    stkToken: EthAddress,
    to: EthAddress,
    stkAmount: uint256,
    minAmountOut: uint256,
  ) {
    requireAddress(to);
    if (stkAmount === '0') throw new Error('Amount must be greater than 0. If you want to start cooldown period, use UmbrellaStartUnstakeAction');
    super(
      'UmbrellaUnstake',
      getAddr('UmbrellaUnstake'),
      ['address', 'address', 'uint256', 'uint256'],
      [stkToken, to, stkAmount, minAmountOut],
    );
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
    ];
  }
}
