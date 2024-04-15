import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256, uint32 } from '../../types';


/**
 * @category LlamaLend
 */
export class LlamaLendBoostAction extends Action {
  constructor(controller: EthAddress, controllerId: uint256, exchangeOrder: Array<any>, gasUsed: uint32) {
    super(
      'LlamaLendBoost',
      getAddr('LlamaLendBoost'),
      [
        'address',
        'uint256',
        ['address', 'address', 'uint256', 'uint256', 'uint256', 'uint256', 'address', 'address', 'bytes', ['address', 'address', 'address', 'uint256', 'uint256', 'bytes']],
        'uint32',
      ],
      [controller, controllerId, exchangeOrder, gasUsed],
    );
    this.mappableArgs = [
      this.args[0],
    ];
  }
}