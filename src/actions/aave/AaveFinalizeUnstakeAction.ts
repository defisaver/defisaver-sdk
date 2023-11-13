import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 *  AaveFinalizeUnstakeAction - finalizes the unstaking AAVE process
 *
 *  @category Aave
 */
export class AaveFinalizeUnstakeAction extends Action {
  /**
   * @param amount - Amount to unstake (max.uint for whole balance)
   * @param to - Address to receive AAVE tokens
   */
  constructor(amount: uint256, to: EthAddress) {
    requireAddress(to);
    super(
      'AaveUnstake',
      getAddr('AaveUnstake'),
      ['uint256', 'address'],
      [amount, to],
    );
    this.mappableArgs = [
      this.args[1],
      this.args[2],
    ];
  }
}
