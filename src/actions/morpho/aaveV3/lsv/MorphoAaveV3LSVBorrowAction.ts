import { Action } from '../../../../Action';
import { getAddr } from '../../../../addresses';
import { EthAddress, uint256 } from '../../../../types';

/**
 * MorphoAaveV3BorrowAction - Borrow token from Morpho AaveV3
 *
 * @category Morpho
 */
export class MorphoAaveV3LSVBorrowAction extends Action {
  /**
     * @param emodeId Type of emode we are entering in, each one is different deployment on Morpho
     * @param tokenAddr - Address of tokenAddr (underlying)
     * @param amount - Token amount
     * @param to - The address we are sending the borrowed tokens to
     * @param onBehalf - For what user we are borrowing the tokens, defaults to proxy
     * @param maxIterations - Max number of iterations for p2p matching, 0 will use default num of iterations
     */
  constructor(
    emodeId: uint256,
    tokenAddr: EthAddress,
    amount: uint256,
    to: EthAddress,
    onBehalf: EthAddress = getAddr('Empty'),
    maxIterations: uint256 = '4',
  ) {
    super(
      'MorphoAaveV3LSVBorrow',
      getAddr('MorphoAaveV3LSVBorrow'),
      ['uint256', 'address', 'uint256', 'address', 'address', 'uint256'],
      [emodeId, tokenAddr, amount, to, onBehalf, maxIterations],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
      this.args[4],
    ];
  }
}