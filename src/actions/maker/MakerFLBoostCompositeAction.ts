import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * MakerFLBoostCompositeAction - executes a fl boost in a single action
 *
 * @category Maker
 */
export class MakerFLBoostCompositeAction extends Action {
  /**
     * @param vaultId
     * @param joinAddr
     * @param gasUsed
     * @param exchangeParams
     */
  constructor(vaultId:uint256, joinAddr:EthAddress, gasUsed:EthAddress, exchangeParams:Array<any>) {
    super(
      'McdFLBoostComposite',
      getAddr('McdFLBoostComposite'),
      [
        'uint256',
        'address',
        'uint256',
        ['address', 'address', 'uint256', 'uint256', 'uint256', 'uint256', 'address', 'address', 'bytes', ['address', 'address', 'address', 'uint256', 'uint256', 'bytes']],
      ],
      [
        vaultId,
        joinAddr,
        gasUsed,
        exchangeParams,
      ],
    );
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[3][0],
      this.args[3][1],
      this.args[3][2],
    ];
  }
}