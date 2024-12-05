import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import {
  EthAddress,
  uint32,
} from '../../types';

/**
 *
 * @category CurveUsd
 */
export class CurveUsdRepayTransientAction extends Action {
  constructor(controllerAddress: EthAddress, to: EthAddress, exchangeOrder: Array<any>, gasUsed: uint32) {
    super(
      'CurveUsdRepayTransient',
      getAddr('CurveUsdRepayTransient'),
      [
        'address',
        'address',
        ['address', 'address', 'uint256', 'uint256', 'uint256', 'uint256', 'address', 'address', 'bytes', ['address', 'address', 'address', 'uint256', 'uint256', 'bytes']],
        'uint32',
      ],
      [
        controllerAddress,
        to,
        exchangeOrder,
        gasUsed,
      ],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
    ];
  }
}