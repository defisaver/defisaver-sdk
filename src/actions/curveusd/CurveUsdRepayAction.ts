import { Action } from '../../Action';
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
export class CurveUsdRepayAction extends Action {
  constructor(
    controllerAddress: EthAddress,
    collAmount: uint256,
    to: EthAddress,
    minAmount: uint256,
    additionData: bytes,
    gasUsed: uint32,
    dfsFeeDivider: uint24,
  ) {
    super(
      'CurveUsdRepay',
      getAddr('CurveUsdRepay'),
      ['address', 'uint256', 'address', 'uint256', 'bytes', 'uint32', 'uint24'],
      [controllerAddress, collAmount, to, minAmount, additionData, gasUsed, dfsFeeDivider],
    );

    this.mappableArgs = [
      ...this.args,
    ];
  }
}