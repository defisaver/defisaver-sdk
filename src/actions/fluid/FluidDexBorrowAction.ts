import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * FluidDexBorrowAction - Borrow assets from the Fluid DEX vault.
 *
 * @category FluidDexBorrow
 */
export class FluidDexBorrowAction extends Action {
  /**
   * @param vault The address of the Fluid DEX vault.
   * @param to Address to send the borrowed assets to.
   * @param nftId The NFT ID of the position.
   * @param borrowAmount Amount of debt to borrow. Can be empty. Used if vault is T2.
   * @param borrowVariableData Variable data for borrow action. Can be empty. Used if vault is T3 or T4.
   * @param wrapBorrowedEth Whether to wrap the borrowed ETH into WETH if one of the borrowed assets is ETH.
   */
  constructor(
    vault: EthAddress,
    to: EthAddress,
    nftId: uint256,
    borrowAmount: uint256,
    borrowVariableData: Array<any>,
    wrapBorrowedEth: boolean,
  ) {
    super(
      'FluidDexBorrow',
      getAddr('FluidDexBorrow'),
      [
        'address',
        'address',
        'uint256',
        'uint256',
        ['uint256', 'uint256', 'uint256'],
        'bool',
      ],
      [vault, to, nftId, borrowAmount, borrowVariableData, wrapBorrowedEth],
    );
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
      this.args[4][0],
      this.args[4][1],
      this.args[4][2],
      this.args[5],
    ];
  }
}
