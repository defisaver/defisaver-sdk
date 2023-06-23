import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import { EthAddress, uint256, bytes } from '../../types';

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
  ) {
    requireAddress(from);
    super(
      'CurveUsdLevCreate',
      getAddr('CurveUsdLevCreate'),
      ['address', 'uint256', 'uint256', 'uint256', 'uint256', 'address', 'bytes'],
      [controllerAddress, collateralAmount, debtAmount, minAmount, nBands, from, additionData],
    );

    this.mappableArgs = [
      ...this.args,
    ];
  }
}