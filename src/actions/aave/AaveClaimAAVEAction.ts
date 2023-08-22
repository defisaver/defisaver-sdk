import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 *  AaveClaimAAVEAction - Claims AAVE from stkAave
 *
 *  @category Aave
 */
export class AaveClaimAAVEAction extends Action {
  /**
   * @param amount - Amount to claim
   * @param to - Address where claimed tokens will end up
   */
  constructor(amount: uint256, to: EthAddress) {
    requireAddress(to);
    super(
      'AaveClaimAAVE',
      getAddr('AaveClaimAAVE'),
      ['uint256', 'address'],
      [amount, to],
    );
    this.mappableArgs = [
      this.args[1],
      this.args[2],
    ];
  }
}
