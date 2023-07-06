import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import {
  EthAddress,
  uint256,
  uint32,
  bytes,
} from '../../types';

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
    gasUsed: uint32,
    dfsFeeDivider: uint32,
    useSteth: Boolean,
  ) {
    requireAddress(to);
    super(
      'CurveUsdSelfLiquidateWithColl',
      getAddr('CurveUsdSelfLiquidateWithColl'),
      ['address', 'uint256', 'uint256', 'uint256', 'uint256', 'address', 'bytes', 'uint32', 'uint32', 'bool'],
      [controllerAddress, percentage, minCrvUsdExpected, swapAmount, minAmount, to, additionData, gasUsed, dfsFeeDivider, useSteth],
    );

    this.mappableArgs = [
      ...this.args,
    ];
  }
}