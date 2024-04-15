import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256, uint32 } from '../../types';


/**
 * @category LlamaLend
 */
export class LlamaLendLevCreateAction extends Action {
  constructor(controller: EthAddress, controllerId: uint256, from: EthAddress, collAmount: uint256, nBands: uint256, exchangeOrder: Array<any>, gasUsed: uint32) {
    super(
      'LlamaLendLevCreate',
      getAddr('LlamaLendLevCreate'),
      [
        'address',
        'uint256',
        'address',
        'uint256',
        'uint256',
        ['address', 'address', 'uint256', 'uint256', 'uint256', 'uint256', 'address', 'address', 'bytes', ['address', 'address', 'address', 'uint256', 'uint256', 'bytes']],
        'uint32',
      ],
      [controller, controllerId, from, collAmount, nBands, exchangeOrder, gasUsed],
    );
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
    ];
  }

  async getAssetsToApprove() {
    return [{
      owner: this.args[1],
      asset: this.args[5][1],
    }];
  }
}