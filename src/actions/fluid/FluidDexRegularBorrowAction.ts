import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * FluidDexRegularBorrowAction - Borrow assets from the Fluid DEX T2 vault.
 *
 * @category Fluid
 */
export class FluidDexRegularBorrowAction extends Action {
  /**
   * @param vault The address of the Fluid DEX vault.
   * @param to Address to send the borrowed assets to.
   * @param nftId The NFT ID of the position.
   * @param borrowAmount Amount of debt to borrow
   * @param wrapBorrowedEth Whether to wrap the borrowed ETH into WETH if one of the borrowed assets is ETH.
   */
  constructor(
    vault: EthAddress,
    to: EthAddress,
    nftId: uint256,
    borrowAmount: uint256,
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
      [vault, to, nftId, borrowAmount, ['0', '0', '0'], wrapBorrowedEth],
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
