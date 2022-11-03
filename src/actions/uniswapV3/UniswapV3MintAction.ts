import { getAssetInfoByAddress } from '@defisaver/tokens';
import {EthAddress,uint256,uint24,int24,uint160} from '../../types';
import {ActionWithL2} from '../../ActionWithL2';
import { getAddr } from '../../addresses.js';
import { requireAddress } from "../../utils/general";


/**
 * Creates a new Uniswap v3 LP supply position
 * 
 * @category UniswapV3
 */
export class UniswapV3MintAction extends ActionWithL2 {
  /**
   * @param {EthAddress} token0
   * @param {EthAddress} token1
   * @param {number} fee
   * @param {number} tickLower
   * @param {number} tickUpper
   * @param {string} amount0Desired
   * @param {string} amount1Desired
   * @param {string} amount0Min
   * @param {string} amount1Min
   * @param {EthAddress} recipient
   * @param {number} deadline
   * @param {EthAddress} from
   */
  constructor(token0:EthAddress, token1:EthAddress, fee:uint24, tickLower:int24, tickUpper:int24, amount0Desired:uint256, amount1Desired:uint256, amount0Min:uint256, amount1Min:uint256, recipient:EthAddress, deadline:uint256, from:EthAddress) {
    requireAddress(recipient);
    super(
      'UniMintV3',
      getAddr('UniMintV3'),
      [
        "address",
        "address",
        "uint24",
        "int24",
        "int24",
        "uint256",
        "uint256",
        "uint256",
        "uint256",
        "address",
        "uint256",
        "address",
      ],
      [...arguments]
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

    if (assetA.symbol !== 'ETH') approveArr.push({asset: this.args[0], owner: this.args[11], specialApproveLabel: 'uniswap v3'});
    if (assetB.symbol !== 'ETH') approveArr.push({asset: this.args[1], owner: this.args[11], specialApproveLabel: 'uniswap v3'});

    return approveArr;
  }
}