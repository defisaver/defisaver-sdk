import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256, uint32 } from '../../types';
import { controllerToCollateralAssetMap } from '../../utils/llamalend-utils';


/**
 * @category LlamaLend
 */
export class LlamaLendLevCreateAction extends Action {
  constructor(controller: EthAddress, from: EthAddress, collAmount: uint256, nBands: uint256, exchangeOrder: Array<any>, gasUsed: uint32) {
    super(
      'LlamaLendLevCreate',
      getAddr('LlamaLendLevCreate'),
      [
        'address',
        'address',
        'uint256',
        'uint256',
        ['address', 'address', 'uint256', 'uint256', 'uint256', 'uint256', 'address', 'address', 'bytes', ['address', 'address', 'address', 'uint256', 'uint256', 'bytes']],
        'uint32',
      ],
      [controller, from, collAmount, nBands, exchangeOrder, gasUsed],
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
      asset: controllerToCollateralAssetMap[this.args[0] as keyof typeof controllerToCollateralAssetMap],
    }];
  }
}