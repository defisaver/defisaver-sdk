import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * MorphoAaveV2WithdrawAction - Withdraw token from morpho
 *
 * @category Morpho
 */
export class MorphoAaveV2WithdrawAction extends Action {
  /**
   * @param tokenAddr - Address of Token
   * @param amount - Token amount
   * @param to - Tokens will be withdrawn to this address
   */
  constructor(tokenAddr:EthAddress, amount:uint256, to:EthAddress) {
    super('MorphoAaveV2Withdraw', getAddr('MorphoAaveV2Withdraw'), ['address', 'uint256', 'address'], [tokenAddr, amount, to]);

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
    ];
  }
}
