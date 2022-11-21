import { getAssetInfoByAddress } from '@defisaver/tokens';
import {
  EthAddress, uint256, uint24, int24, uint160,
} from '../../types';
import { ActionWithL2 } from '../../ActionWithL2';
import { getAddr } from '../../addresses';
import { requireAddress } from '../../utils/general';

/**
 * Create a uniswap v3 pool
 *
 * @category UniswapV3
 */
export class UniswapV3CreatePoolAction extends ActionWithL2 {
  /**
   * @param token0
   * @param token1
   * @param fee
   * @param tickLower
   * @param tickUpper
   * @param amount0Desired
   * @param amount1Desired
   * @param amount0Min
   * @param amount1Min
   * @param recipient
   * @param deadline
   * @param from
   * @param sqrtPriceX96
   */
  constructor(token0:EthAddress, token1:EthAddress, fee:uint24, tickLower:int24, tickUpper:int24, amount0Desired:uint256, amount1Desired:uint256, amount0Min:uint256, amount1Min:uint256, recipient:EthAddress, deadline:uint256, from:EthAddress, sqrtPriceX96:uint160) {
    requireAddress(recipient);
    super(
      'UniCreatePoolV3',
      getAddr('UniCreatePoolV3'),
      [
        'address',
        'address',
        'uint24',
        'int24',
        'int24',
        'uint256',
        'uint256',
        'uint256',
        'uint256',
        'address',
        'uint256',
        'address',
        'uint160',
      ],
      [token0, token1, fee, tickLower, tickUpper, amount0Desired, amount1Desired, amount0Min, amount1Min, recipient, deadline, from, sqrtPriceX96],
    );

    this.mappableArgs = [
      this.args[5],
      this.args[6],
    ];
  }

  async getAssetsToApprove() {
    const assetA = getAssetInfoByAddress(this.args[0]);
    const assetB = getAssetInfoByAddress(this.args[1]);

    const approveArr = [];

    if (assetA.symbol !== 'ETH') approveArr.push({ asset: this.args[0], owner: this.args[11], specialApproveLabel: 'uniswap v3' });
    if (assetB.symbol !== 'ETH') approveArr.push({ asset: this.args[1], owner: this.args[11], specialApproveLabel: 'uniswap v3' });

    return approveArr;
  }
}