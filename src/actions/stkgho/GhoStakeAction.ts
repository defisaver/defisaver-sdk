import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 *  GhoStakeAction - stakes GHO tokens
 *
 *  @category StkGHO
 */
export class GhoStakeAction extends Action {
  /**
   * @param from - Address to pull the GHO tokens from
   * @param to - Address to send the stkGHO tokens to
   * @param amount - Amount of GHO tokens to stake
   */
  constructor(from: EthAddress, to: EthAddress, amount: uint256) {
    requireAddress(from);
    requireAddress(to);
    super(
      'GhoStake',
      getAddr('GhoStake'),
      ['address', 'address', 'uint256'],
      [from, to, amount],
    );
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
    ];
  }
}
