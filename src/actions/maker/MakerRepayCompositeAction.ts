import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * MakerRepayCompositeAction - executes a repay in a single action
 *
 * @category Maker
 */
export class MakerRepayCompositeAction extends Action {
  /**
     * @param vaultId
     * @param joinAddr
     * @param gasUsed
     * @param flAddress
     * @param flAmount
     * @param targetRatio
     * @param exchangeParams
     */
  constructor(vaultId: uint256, joinAddr: EthAddress, gasUsed: EthAddress, flAddress: EthAddress, flAmount: uint256, targetRatio: uint256, exchangeParams: Array<any>) {
    super(
      'McdRepayComposite',
      getAddr('McdRepayComposite'),
      [
        'uint256',
        'address',
        'uint256',
        'address',
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
        targetRatio,
        exchangeParams,
      ],
    );
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[5],
      this.args[6][0],
      this.args[6][1],
      this.args[6][2],
    ];
  }
}