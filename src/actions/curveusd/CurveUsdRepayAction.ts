import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256, int256 } from '../../types';

/**
 *
 * @category CurveUsd
 */
export class CurveUsdRepayAction extends Action {
  constructor(
    controllerAddress: EthAddress,
    collAmount: uint256,
    to: EthAddress,
    swapData: int256[],
  ) {
    super(
      'CurveUsdRepay',
      getAddr('CurveUsdRepay'),
      ['address', 'uint256', 'address', 'uint256[]'],
      [controllerAddress, collAmount, to, swapData],
    );

    this.mappableArgs = [
      ...this.args,
    ];
  }
}