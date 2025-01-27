import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * FluidVaultT1WithdrawAction - Withdraw assets from Fluid Vault T1 (1_col:1_debt)
 *
 * @category Fluid
 */
export class FluidVaultT1WithdrawAction extends Action {
  /**
   * @param vault The address of the Fluid Vault T1
   * @param nftId ID of the NFT representing the position
   * @param amount Amount to withdraw. Pass type(uint256).max to withdraw all.
   * @param to Address to send the withdrawn assets to
   */
  constructor(
    vault: EthAddress,
    nftId: uint256,
    amount: uint256,
    to: EthAddress,
  ) {
    super(
      'FluidVaultT1Withdraw',
      getAddr('Empty'),
      ['address', 'uint256', 'uint256', 'address'],
      [vault, nftId, amount, to],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
    ];
  }
}
