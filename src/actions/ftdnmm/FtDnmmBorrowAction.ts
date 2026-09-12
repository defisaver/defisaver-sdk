import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * FtDnmmBorrowAction - Borrow an asset from the ftDNMM money market
 *
 * @category FtDnmm
 */
export class FtDnmmBorrowAction extends Action {
  /**
   * @param asset - Underlying asset to borrow
   * @param amount - Amount to borrow
   * @param to - Address which will receive the borrowed tokens (defaults to the wallet)
   */
  constructor(
    asset:EthAddress,
    amount:uint256,
    to:EthAddress,
  ) {
    super(
      'FtDnmmBorrow',
      getAddr('FtDnmmBorrow'),
      ['address', 'uint256', 'address'],
      [asset, amount, to],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
    ];
  }
}
