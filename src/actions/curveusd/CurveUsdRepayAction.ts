import { Action } from '../../Action';
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
export class CurveUsdRepayAction extends Action {
  constructor(
    controllerAddress: EthAddress,
    collAmount: uint256,
    to: EthAddress,
    minAmount: uint256,
    additionData: bytes,
    gasUsed: uint32,
    dfsFeeDivider: uint32,
    useSteth: Boolean,
  ) {
    super(
      'CurveUsdRepay',
      getAddr('CurveUsdRepay'),
      ['address', 'uint256', 'address', 'uint256', 'bytes', 'uint32', 'uint32', 'bool'],
      [controllerAddress, collAmount, to, minAmount, additionData, gasUsed, dfsFeeDivider, useSteth],
    );

    this.mappableArgs = [
      ...this.args,
    ];
  }
}