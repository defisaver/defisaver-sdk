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
export class CurveUsdLevCreateTransientAction extends Action {
  constructor(
    controllerAddress: EthAddress,
    from: EthAddress,
    collateralAmount: uint256,
    nBands: uint256,
    exchangeOrder: Array<any>,
    gasUsed: uint32,
  ) {
    requireAddress(from);
    super(
      'CurveUsdLevCreateTransient',
      getAddr('CurveUsdLevCreateTransient'),
      [
        'address',
        'address',
        'uint256',
        'uint256',
        ['address', 'address', 'uint256', 'uint256', 'uint256', 'uint256', 'address', 'address', 'bytes', ['address', 'address', 'address', 'uint256', 'uint256', 'bytes']],
        'uint32',
      ],
      [
        controllerAddress,
        from,
        collateralAmount,
        nBands,
        exchangeOrder,
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