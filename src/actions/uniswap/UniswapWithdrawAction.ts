import Action from "../../Action";
import { getPoolAddressByAddresses } from "../../utils/uniswapLP";
import { getAddr } from '../../addresses.js';
import {EthAddress,uint256} from '../../types';
import { requireAddress } from "../../utils/general";

/**
 * Withdraws liquidity from uniswap pool
 */
export default class UniswapWithdrawAction extends Action {
  /**
   * @param {EthAddress} tokenA
   * @param {EthAddress} tokenB
   * @param {string} liquidity
   * @param {EthAddress} to
   * @param {EthAddress} from
   * @param {string} amountAMin
   * @param {string} amountBMin
   * @param {number} deadline
   */
  constructor(tokenA:EthAddress, tokenB:EthAddress, liquidity:uint256, to:EthAddress, from:EthAddress, amountAMin:uint256, amountBMin:uint256, deadline:uint256) {
    requireAddress(to);
    super(
      'UniWithdraw',
      getAddr('UniWithdraw'),
      [
        "address",
        "address",
        "uint256",
        "address",
        "address",
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
    ];
  }

  async getAssetsToApprove() {
    const lpAddress = getPoolAddressByAddresses(this.args[0], this.args[1])
    return [{asset: lpAddress, owner: this.args[4], specialApproveLabel: 'uniswap v2'}];
  }
}