import { Action } from '../../../../Action';
import { getAddr } from '../../../../addresses';
import { EthAddress, uint256 } from '../../../../types';

/**
 * MorphoAaveV3WithdrawAction - Withdraw token from Morpho AaveV3
 *
 * @category Morpho
 */
export class MorphoAaveV3LSVWithdrawAction extends Action {
  /**
     * @param emodeId Type of emode we are entering in, each one is different deployment on Morpho
     * @param tokenAddr - Address of tokenAddr (underlying)
     * @param amount - Token amount
     * @param to - Tokens will be sent to this address
     * @param onBehalf - For what user we are withdrawing the tokens, defaults to proxy
     * @param withdrawAsColl - If we want to withdraw from collateral or from pure supply
     * @param maxIterations - Max number of iterations for p2p matching, 0 will use default num of iterations
     */
  constructor(
    emodeId: uint256,
    tokenAddr: EthAddress,
    amount: uint256,
    to: EthAddress,
    onBehalf: EthAddress = getAddr('Empty'),
    withdrawAsColl: boolean = true,
    maxIterations: uint256 = '4',
  ) {
    super(
      'MorphoAaveV3LSVWithdraw',
      getAddr('MorphoAaveV3LSVWithdraw'),
      ['uint256', 'address', 'uint256', 'address', 'address', 'bool', 'uint256'],
      [emodeId, tokenAddr, amount, to, onBehalf, withdrawAsColl, maxIterations],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
      this.args[4],
      this.args[5],
    ];
  }
}