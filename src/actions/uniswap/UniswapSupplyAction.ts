import {Action}  from "../../Action";
import { getAssetInfoByAddress } from "@defisaver/tokens";
import { getAddr } from '../../addresses.js';
import {EthAddress,uint256} from '../../types';
import { requireAddress } from "../../utils/general";

/**
 * Supplies a pair tokens to uniswap pool
 * 
 * @category Uniswap
 */
export class UniswapSupplyAction extends Action {
  /**
   * @param {EthAddress} tokenA
   * @param {EthAddress} tokenB
   * @param {EthAddress} from
   * @param {EthAddress} to
   * @param {string} amountADesired
   * @param {string} amountBDesired
   * @param {string} amountAMin
   * @param {string} amountBMin
   * @param {number} deadline
   */
  constructor(tokenA:EthAddress, tokenB:EthAddress, from:EthAddress, to:EthAddress, amountADesired:uint256, amountBDesired:uint256, amountAMin:uint256, amountBMin:uint256, deadline:uint256) {
    requireAddress(to);
    super(
      'UniSupply',
      getAddr('UniSupply'),
      [
        "address",
        "address",
        "address",
        "address",
        "uint256",
        "uint256",
        "uint256",
        "uint256",
        "uint256",
      ],
      [...arguments]
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
      this.args[4],
      this.args[5]
    ];
  }

  async getAssetsToApprove() {
    const assetA = getAssetInfoByAddress(this.args[0]);
    const assetB = getAssetInfoByAddress(this.args[1]);

    const approveArr = [];

    if (assetA.symbol !== 'ETH') approveArr.push({asset: this.args[0], owner: this.args[2], specialApproveLabel: 'uniswap v2'});
    if (assetB.symbol !== 'ETH') approveArr.push({asset: this.args[1], owner: this.args[2], specialApproveLabel: 'uniswap v2'});

    return approveArr;
  }
}