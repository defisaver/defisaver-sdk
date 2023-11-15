import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import {
  EthAddress,
  uint256,
  uint32,
  bytes,
  uint24,
} from '../../types';

/**
 *
 * @category CurveUsd
 */
export class CurveUsdLevCreateAction extends Action {
  constructor(
    controllerAddress: EthAddress,
    collateralAmount: uint256,
    debtAmount: uint256,
    minAmount: uint256,
    nBands: uint256,
    from: EthAddress,
    additionData: bytes,
    gasUsed: uint32,
    dfsFeeDivider: uint24,
  ) {
    requireAddress(from);
    super(
      'CurveUsdLevCreate',
      getAddr('CurveUsdLevCreate'),
      ['address', 'uint256', 'uint256', 'uint256', 'uint256', 'address', 'bytes', 'uint32', 'uint24'],
      [controllerAddress, collateralAmount, debtAmount, minAmount, nBands, from, additionData, gasUsed, dfsFeeDivider],
    );

    this.mappableArgs = [
      ...this.args,
    ];
  }
}