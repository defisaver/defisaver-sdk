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
   * @param amount The amount of aToken or GHO to be unstaked (max.uint to redeem whole balance, 0 to start cooldown period)
   * @param minOutOrMaxBurn Two cases:
   * 1. For max redeem, it's the minimum amount of aTokens or GHO to be received
   * 2. For partial redeem, it's the max amount of stkToken shares to burn
   */
  constructor(
    stkToken: EthAddress,
    to: EthAddress,
    amount: uint256,
    minOutOrMaxBurn: uint256,
  ) {
    requireAddress(to);
    if (amount === '0') throw new Error('Amount must be greater than 0. If you want to start cooldown period, use UmbrellaStartUnstakeAction');
    super(
      'UmbrellaUnstake',
      getAddr('UmbrellaUnstake'),
      ['address', 'address', 'uint256', 'uint256'],
      [stkToken, to, amount, minOutOrMaxBurn],
    );
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
    ];
  }
}
