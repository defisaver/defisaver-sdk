import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 *  GhoFinalizeUnstakeAction - finalizes the unstaking GHO process
 *
 *  @category StkGHO
 */
export class GhoFinalizeUnstakeAction extends Action {
  /**
   * @param amount - Amount to unstake (max.uint for whole balance)
   * @param to - Address to receive AAVE tokens
   */
  constructor(amount: uint256, to: EthAddress) {
    requireAddress(to);
    super(
      'GhoUnstake',
      getAddr('GhoUnstake'),
      ['uint256', 'address'],
      [amount, to],
    );
    this.mappableArgs = [
      this.args[1],
      this.args[2],
    ];
  }
}
