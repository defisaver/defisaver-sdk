const { getAssetInfoByAddress } = require('@defisaver/tokens');
import {EthAddress,uint256} from '../../types';
const ActionWithL2 = require('../../ActionWithL2');
const { getAddr } = require('../../addresses.js');

/**
 * Supplies a pair of tokens to an existing Uniswap v3 position identified by tokenId
 */
export default class UniswapV3SupplyAction extends ActionWithL2 {
  /**
   * @param {string} tokenId
   * @param {string} amount0Desired
   * @param {string} amount1Desired
   * @param {string} amount0Min
   * @param {string} amount1Min
   * @param {number} deadline
   * @param {EthAddress} from
   * @param {EthAddress} token0
   * @param {EthAddress} token1
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
      [...arguments]
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