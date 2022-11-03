import {Action}  from "../../Action";
import { getPoolAddressByAddresses } from "../../utils/uniswapLP";
import { getAddr } from '../../addresses.js';
import {EthAddress,uint256} from '../../types';
import { requireAddress } from "../../utils/general";

/**
 * Withdraws liquidity from uniswap pool
 * 
 * @category Uniswap
 */
export class UniswapWithdrawAction extends Action {
  /**
   * @param tokenA
   * @param tokenB
   * @param liquidity
   * @param to
   * @param from
   * @param amountAMin
   * @param amountBMin
   * @param deadline
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
      [tokenA, tokenB, liquidity, to, from, amountAMin, amountBMin, deadline]
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