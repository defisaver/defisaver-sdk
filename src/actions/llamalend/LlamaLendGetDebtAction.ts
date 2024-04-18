import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress } from '../../types';


/**
 * @category LlamaLend
 */
export class LlamaLendGetDebtAction extends Action {
  constructor(controllerAddr:EthAddress, debtor:EthAddress) {
    super(
      'LlamaLendGetDebt',
      getAddr('LlamaLendGetDebt'),
      [
        'address',
        'address',
      ],
      [controllerAddr, debtor],
    );
  }
}