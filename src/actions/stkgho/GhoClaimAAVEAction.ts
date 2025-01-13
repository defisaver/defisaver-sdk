import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 *  GhoClaimAAVE - Claims AAVE from stkGHO
 *
 *  @category StkGHO
 */
export class GhoClaimAAVEAction extends Action {
  /**
   * @param amount - Amount to claim
   * @param to - Address where claimed tokens will end up
   */
  constructor(amount: uint256, to: EthAddress) {
    requireAddress(to);
    super(
      'GhoClaimAAVE',
      getAddr('GhoClaimAAVE'),
      ['uint256', 'address'],
      [amount, to],
    );
    this.mappableArgs = [
      this.args[1],
      this.args[2],
    ];
  }
}
