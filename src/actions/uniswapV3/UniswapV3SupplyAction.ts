import { getAssetInfoByAddress } from '@defisaver/tokens';
import {EthAddress,uint256} from '../../types';
import {ActionWithL2} from '../../ActionWithL2';
import { getAddr } from '../../addresses.js';

/**
 * Supplies a pair of tokens to an existing Uniswap v3 position identified by tokenId
 * 
 * @category UniswapV3
 */
export class UniswapV3SupplyAction extends ActionWithL2 {
  /**
   * @param tokenId
   * @param amount0Desired
   * @param amount1Desired
   * @param amount0Min
   * @param amount1Min
   * @param deadline
   * @param from
   * @param token0
   * @param token1
   */
  constructor(tokenId:uint256, amount0Desired:uint256, amount1Desired:uint256, amount0Min:uint256, amount1Min:uint256, deadline:uint256, from:EthAddress, token0:EthAddress, token1:EthAddress) {
    super(
      'UniSupplyV3',
      getAddr('UniSupplyV3'),
      [
        "uint256",
        "uint256",
        "uint256",
        "uint256",
        "uint256",
        "uint256",
        "address",
        "address",
        "address",
      ],
      [tokenId, amount0Desired, amount1Desired, amount0Min, amount1Min, deadline, from, token0, token1]
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
    ];
  }

  async getAssetsToApprove() {
    const assetA = getAssetInfoByAddress(this.args[7]);
    const assetB = getAssetInfoByAddress(this.args[8]);

    const approveArr = [];

    if (assetA.symbol !== 'ETH') approveArr.push({asset: this.args[7], owner: this.args[6], specialApproveLabel: 'uniswap v3'});
    if (assetB.symbol !== 'ETH') approveArr.push({asset: this.args[8], owner: this.args[6], specialApproveLabel: 'uniswap v3'});

    return approveArr;
  }
}