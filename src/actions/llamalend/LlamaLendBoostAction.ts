import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256, uint32 } from '../../types';


/**
 * @category LlamaLend
 */
export class LlamaLendBoostAction extends Action {
  constructor(controller: EthAddress, exchangeOrder: Array<any>, gasUsed: uint32) {
    super(
      'LlamaLendBoost',
      getAddr('LlamaLendBoost'),
      [
        'address',
        ['address', 'address', 'uint256', 'uint256', 'uint256', 'uint256', 'address', 'address', 'bytes', ['address', 'address', 'address', 'uint256', 'uint256', 'bytes']],
        'uint32',
      ],
      [controller, exchangeOrder, gasUsed],
    );
    this.mappableArgs = [
      this.args[0],
    ];
  }
}