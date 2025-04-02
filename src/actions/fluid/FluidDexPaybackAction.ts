import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * FluidDexPaybackAction - Payback debt on the Fluid DEX vault.
 *
 * @category FluidDexPayback
 */
export class FluidDexPaybackAction extends Action {
  /**
   * @param vault The address of the Fluid DEX vault.
   * @param from Address to pull the debt tokens from.
   * @param nftId The NFT ID of the position.
   * @param paybackAmount The amount of debt to payback. Used if vault is T2.
   * @param paybackVariableData Variable data for payback action. Used if vault is T3 or T4.
   */
  constructor(
    vault: EthAddress,
    from: EthAddress,
    nftId: uint256,
    paybackAmount: uint256,
    paybackVariableData: Array<any>,
  ) {
    super(
      'FluidDexPayback',
      getAddr('FluidDexPayback'),
      [
        'address',
        'address',
        'uint256',
        'uint256',
        ['uint256', 'uint256', 'uint256', 'uint256'],
      ],
      [vault, from, nftId, paybackAmount, paybackVariableData],
    );
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
      this.args[4][0],
      this.args[4][1],
      this.args[4][2],
      this.args[4][3],
    ];
  }
}
