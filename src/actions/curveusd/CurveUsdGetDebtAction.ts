import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress } from '../../types';


/**
 * @category CurveUsd
 */
export class CurveUsdGetDebtAction extends Action {
  constructor(controllerAddr:EthAddress, debtor:EthAddress) {
    super(
      'CurveUsdGetDebt',
      getAddr('CurveUsdGetDebt'),
      [
        'address',
        'address',
      ],
      [controllerAddr, debtor],
    );
  }
}