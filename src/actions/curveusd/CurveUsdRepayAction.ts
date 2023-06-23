import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import {
  EthAddress, uint256, int256, bytes,
} from '../../types';

/**
 *
 * @category CurveUsd
 */
export class CurveUsdRepayAction extends Action {
  constructor(
    controllerAddress: EthAddress,
    collAmount: uint256,
    to: EthAddress,
    minAmount: uint256,
    additionData: bytes,
  ) {
    super(
      'CurveUsdRepay',
      getAddr('CurveUsdRepay'),
      ['address', 'uint256', 'address', 'uint256', 'bytes'],
      [controllerAddress, collAmount, to, minAmount, additionData],
    );

    this.mappableArgs = [
      ...this.args,
    ];
  }
}