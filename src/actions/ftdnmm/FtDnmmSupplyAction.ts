import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * FtDnmmSupplyAction - Deposit an asset as collateral to the ftDNMM money market
 *
 * @category FtDnmm
 */
export class FtDnmmSupplyAction extends Action {
  /**
   * @param asset - Underlying asset to deposit
   * @param amount - Amount to deposit (uint256 max for whole balance of from)
   * @param from - Address from which to pull tokens (address(0) defaults to the wallet)
   */
  constructor(
    asset:EthAddress,
    amount:uint256,
    from:EthAddress,
  ) {
    super(
      'FtDnmmSupply',
      getAddr('FtDnmmSupply'),
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
