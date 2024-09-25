import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import {
  EthAddress,
  uint256,
  uint32,
} from '../../types';

/**
 *
 * @category CurveUsd
 */
export class CurveUsdSelfLiquidateWithCollTransientAction extends Action {
  constructor(
    controllerAddress: EthAddress,
    percentage: uint256,
    minCrvUsdExpected: uint256,
    to: EthAddress,
    exchangeOrder: Array<any>,
    sellAllCollateral: boolean,
    gasUsed: uint32,
  ) {
    requireAddress(to);
    super(
      'CurveUsdSelfLiquidateWithCollTransient',
      getAddr('CurveUsdSelfLiquidateWithCollTransient'),
      [
        'address',
        'uint256',
        'uint256',
        'address',
        ['address', 'address', 'uint256', 'uint256', 'uint256', 'uint256', 'address', 'address', 'bytes', ['address', 'address', 'address', 'uint256', 'uint256', 'bytes']],
        'bool',
        'uint32',
      ],
      [
        controllerAddress,
        percentage,
        minCrvUsdExpected,
        to,
        exchangeOrder,
        sellAllCollateral,
        gasUsed,
      ],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
    ];
  }
}