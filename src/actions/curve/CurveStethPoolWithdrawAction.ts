import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * CurveStethPoolWithdrawAction - Withdraws tokens from curve steth pool
 *
 * @category Curve
 */
export class CurveStethPoolWithdrawAction extends Action {
  /**
     * @param from
     * @param to
     * @param amounts
     * @param maxBurnAmount
     * @param returnValue
     */
  constructor(
    from:EthAddress,
    to:EthAddress,
    amounts:uint256[2],
    maxBurnAmount:uint256,
    returnValue:uint256,
  ) {
    requireAddress(to);

    super(
      'CurveStethPoolWithdraw',
      getAddr('CurveStethPoolWithdraw'),
      ['address', 'address', 'uint256[2]', 'uint256', 'uint256'],
      [from, to, amounts, maxBurnAmount, returnValue],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2][0],
      this.args[2][1],
      this.args[3],
    ];
  }
}