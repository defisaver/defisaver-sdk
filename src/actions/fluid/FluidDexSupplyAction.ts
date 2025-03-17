import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * FluidDexSupplyAction - Supply collateral to the Fluid DEX vault.
 *
 * @category FluidDexSupply
 */
export class FluidDexSupplyAction extends Action {
  /**
   * @param vault The address of the Fluid DEX vault.
   * @param from Address to pull the collateral from.
   * @param nftId The NFT ID of the position.
   * @param supplyAmount Amount of collateral to deposit. Used if vault is T3.
   * @param supplyVariableData Variable data for supply action. Used if vault is T2 or T4.
   */
  constructor(
    vault: EthAddress,
    from: EthAddress,
    nftId: uint256,
    supplyAmount: uint256,
    supplyVariableData: Array<any>,
  ) {
    super(
      'FluidDexSupply',
      getAddr('FluidDexSupply'),
      [
        'address',
        'address',
        'uint256',
        'uint256',
        ['uint256', 'uint256', 'uint256'],
      ],
      [vault, from, nftId, supplyAmount, supplyVariableData],
    );
  }
}
