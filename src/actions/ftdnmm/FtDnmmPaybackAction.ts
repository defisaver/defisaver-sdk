import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * FtDnmmPaybackAction - Repay debt to the ftDNMM money market
 *
 * @category FtDnmm
 */
export class FtDnmmPaybackAction extends Action {
  /**
   * @param asset - Underlying asset of the debt to repay
   * @param amount - Amount to repay (uint256 max for the whole debt, capped by PositionsManager)
   * @param from - Address from which to pull tokens (address(0) defaults to the wallet)
   */
  constructor(
    asset:EthAddress,
    amount:uint256,
    from:EthAddress,
  ) {
    super(
      'FtDnmmPayback',
      getAddr('FtDnmmPayback'),
      ['address', 'uint256', 'address'],
      [asset, amount, from],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
    ];
  }

  async getAssetsToApprove() {
    return [{ asset: this.args[0], owner: this.args[2] }];
  }
}
