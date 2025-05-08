import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * EulerV2SupplyAction - Supply assets to a Euler vault and gets eTokens vault shares
 *
 * @category EulerV2
 */
export class EulerV2SupplyAction extends Action {
  tokenForApproval: EthAddress;

  /**
   * @param vault The address of the supply vault
   * @param tokenAddress Underlying token address
   * @param account The address of the Euler account, defaults to user's wallet
   * @param from The address from which to pull tokens to be supplied
   * @param amount The amount of assets to supply
   * @param enableAsColl Whether to enable supply vault as collateral
   */
  constructor(
    vault:EthAddress,
    tokenAddress:EthAddress,
    account:EthAddress,
    from:EthAddress,
    amount:uint256,
    enableAsColl:boolean,
  ) {
    super(
      'EulerV2Supply',
      getAddr('EulerV2Supply'),
      ['address', 'address', 'address', 'uint256', 'bool'],
      [vault, account, from, amount, enableAsColl],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
      this.args[4],
    ];
    this.tokenForApproval = tokenAddress;
  }

  async getAssetsToApprove() {
    return [{ asset: this.tokenForApproval, owner: this.args[2] }];
  }
}
