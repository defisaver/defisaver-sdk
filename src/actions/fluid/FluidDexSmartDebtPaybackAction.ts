import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * FluidDexSmartDebtPaybackAction - Payback debt on the Fluid DEX with smart debt (T3, T4).
 *
 * @category Fluid
 */
export class FluidDexSmartDebtPaybackAction extends Action {
  /**
   * @param vault The address of the Fluid DEX vault.
   * @param from Address to pull the debt tokens from.
   * @param nftId The NFT ID of the position.
   * @param paybackVariableData Variable data for payback action.
   */
  constructor(
    vault: EthAddress,
    from: EthAddress,
    nftId: uint256,
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
      [vault, from, nftId, '0', paybackVariableData],
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
