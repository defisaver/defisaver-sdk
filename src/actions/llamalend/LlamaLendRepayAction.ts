import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256, uint32 } from '../../types';


/**
 * @category LlamaLend
 */
export class LlamaLendRepayAction extends Action {
  constructor(controller: EthAddress, controllerId: uint256, exchangeOrder: Array<any>, to: EthAddress, gasUsed: uint32) {
    super(
      'LlamaLendRepay',
      getAddr('LlamaLendRepay'),
      [
        'address',
        'uint256',
        ['address', 'address', 'uint256', 'uint256', 'uint256', 'uint256', 'address', 'address', 'bytes', ['address', 'address', 'address', 'uint256', 'uint256', 'bytes']],
        'address',
        'uint32',
      ],
      [controller, controllerId, exchangeOrder, to, gasUsed],
    );
    this.mappableArgs = [
      this.args[0],
      this.args[2],
    ];
  }
}