import { getAssetInfoByAddress } from '@defisaver/tokens';
import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * FluidVaultT1OpenAction - Open position on Fluid Vault T1 (1_col:1_debt)
 *
 * @category Fluid
 */
export class FluidVaultT1OpenAction extends Action {
  tokenForApproval: EthAddress;

  /**
   * @param vault The address of the Fluid Vault T1
   * @param collAmount Amount of collateral to deposit.
   * @param debtAmount Amount of debt to borrow. Can be 0 if only depositing collateral.
   * @param from Address to pull the collateral from.
   * @param to Address to send the borrowed assets to.
   * @param wrapBorrowedEth Whether to wrap the borrowed ETH into WETH if the borrowed asset is ETH.
   * @param collToken Address of the collateral token.
   */
  constructor(
    vault: EthAddress,
    collAmount: uint256,
    debtAmount: uint256,
    from: EthAddress,
    to: EthAddress,
    wrapBorrowedEth: boolean,
    collToken: EthAddress,
  ) {
    super(
      'FluidVaultT1Open',
      getAddr('FluidVaultT1Open'),
      ['address', 'uint256', 'uint256', 'address', 'address', 'bool'],
      [vault, collAmount, debtAmount, from, to, wrapBorrowedEth],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
      this.args[4],
      this.args[5],
    ];
    this.tokenForApproval = collToken;
  }

  async getAssetsToApprove() {
    const asset = getAssetInfoByAddress(this.tokenForApproval);
    if (asset.symbol !== 'ETH') return [{ asset: this.tokenForApproval, owner: this.args[3] }];
    return [];
  }
}
