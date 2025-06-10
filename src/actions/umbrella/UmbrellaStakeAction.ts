import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * UmbrellaStakeAction - Stake aTokens/underlying or GHO tokens using Umbrella Stake Token
 * This action will always pull aTokens/underlying for non GHO staking and wrap them into waTokens for staking.
 *
 * @category Umbrella
 */
export class UmbrellaStakeAction extends Action {
  /**
   * @param stkToken The umbrella stake token.
   * @param from The address from which the aToken/underlying or GHO will be pulled.
   * @param to The address to which the stkToken will be transferred
   * @param amount The amount of aToken/underlying or GHO to be staked.
   * @param useATokens Whether to wrap aTokens to waTokens (e.g. aUSDC to waUSDC) before staking.
   * @param minSharesOut The minimum amount of stkToken shares to receive.
   */
  constructor(
    stkToken: EthAddress,
    from: EthAddress,
    to: EthAddress,
    amount: uint256,
    useATokens: boolean,
    minSharesOut: uint256,
  ) {
    super(
      'UmbrellaStake',
      getAddr('UmbrellaStake'),
      ['address', 'address', 'address', 'uint256', 'bool', 'uint256'],
      [stkToken, from, to, amount, useATokens, minSharesOut],
    );
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
      this.args[4],
      this.args[5],
    ];
  }
}
