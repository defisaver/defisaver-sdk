import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * MakerBoostCompositeAction - executes a boost in a single action
 *
 * @category Maker
 */
export class MakerBoostCompositeAction extends Action {
  /**
     * @param vaultId
     * @param joinAddr
     * @param gasUsed
     * @param flAddress
     * @param flAmount
     * @param nextPrice
     * @param targetRatio
     * @param exchangeParams
     */
  constructor(vaultId: uint256, joinAddr: EthAddress, gasUsed: EthAddress, flAddress: EthAddress, flAmount: uint256, nextPrice: uint256, targetRatio: uint256, exchangeParams: Array<any>) {
    super(
      'McdBoostComposite',
      getAddr('McdBoostComposite'),
      [
        'uint256',
        'address',
        'uint256',
        'address',
        'uint256',
        'uint256',
        'uint256',
        ['address', 'address', 'uint256', 'uint256', 'uint256', 'uint256', 'address', 'address', 'bytes', ['address', 'address', 'address', 'uint256', 'uint256', 'bytes']],
      ],
      [
        vaultId,
        joinAddr,
        gasUsed,
        flAddress,
        flAmount,
        nextPrice,
        targetRatio,
        exchangeParams,
      ],
    );
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[4],
      this.args[7][0],
      this.args[7][1],
      this.args[7][2],
    ];
  }
}