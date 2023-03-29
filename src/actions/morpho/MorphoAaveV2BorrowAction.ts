import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * MorphoAaveV2BorrowAction - Borrow token from morpho on behalf of proxy
 *
 * @category Morpho
 */
export class MorphoAaveV2BorrowAction extends Action {
  /**
   * @param tokenAddr - Address of Token
   * @param amount - Amount to borrow
   * @param to - Borrowed tokens will be sent to this address
   * @param maxGasForMatching - Max gas to spend on p2p matching
   */
  constructor(
    tokenAddr:EthAddress,
    amount:uint256,
    to:EthAddress,
    maxGasForMatching:uint256 = '0',
  ) {
    super(
      'MorphoAaveV2Borrow',
      getAddr('MorphoAaveV2Borrow'),
      ['address', 'uint256', 'address', 'uint256'],
      [tokenAddr, amount, to, maxGasForMatching],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
    ];
  }
}
