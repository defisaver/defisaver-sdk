import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * FtDnmmWithdrawAction - Withdraw collateral from the ftDNMM money market
 *
 * @category FtDnmm
 */
export class FtDnmmWithdrawAction extends Action {
  /**
   * @param asset - Underlying asset to withdraw
   * @param amount - Amount to withdraw (uint256 max for whole available collateral balance)
   * @param to - Address which will receive the tokens (defaults to the wallet)
   */
  constructor(
    asset:EthAddress,
    amount:uint256,
    to:EthAddress,
  ) {
    super(
      'FtDnmmWithdraw',
      getAddr('FtDnmmWithdraw'),
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
