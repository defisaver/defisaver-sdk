import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import { EthAddress, uint256, bytes } from '../../types';

/**
 *
 * @category CurveUsd
 */
export class CurveUsdSelfLiquidateWithCollAction extends Action {
  constructor(
    controllerAddress: EthAddress,
    percentage: uint256,
    minCrvUsdExpected: uint256,
    swapAmount: uint256,
    minAmount: uint256,
    to: EthAddress,
    additionData: bytes,
  ) {
    requireAddress(to);
    super(
      'CurveUsdSelfLiquidateWithColl',
      getAddr('CurveUsdSelfLiquidateWithColl'),
      ['address', 'uint256', 'uint256', 'uint256', 'uint256', 'address', 'bytes'],
      [controllerAddress, percentage, minCrvUsdExpected, swapAmount, minAmount, to, additionData],
    );

    this.mappableArgs = [
      ...this.args,
    ];
  }
}