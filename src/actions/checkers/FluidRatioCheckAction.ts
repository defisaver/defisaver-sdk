import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { uint8, uint256, EthAddress } from '../../types';

/**
 * FluidRatioCheckAction - Checks ratio for fluid position and reverts if faulty
 *
 * @category Checkers
 */
export class FluidRatioCheckAction extends Action {
  /**
   * @param nftId ID of the NFT representing the position
   * @param ratioState If it should be lower/higher
   * @param targetRatio The ratio user want to be at
   */
  constructor(nftId: uint256, ratioState:uint8, targetRatio:uint256) {
    super(
      'FluidRatioCheck',
      getAddr('Empty'),
      ['uint256', 'uint8', 'uint256'],
      [nftId, ratioState, targetRatio],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
    ];
  }
}