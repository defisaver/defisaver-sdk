import ActionWithL2 from '../../ActionWithL2';
import { getAddr } from '../../addresses.js';
import {EthAddress,uint256,uint128} from '../../types';
import { requireAddress } from "../../utils/general";

/**
 * Burns liquidity, and returns underlying tokens to recipient
 * 
 * @category UniswapV3
 */
export class UniswapV3WithdrawAction extends ActionWithL2 {

  from: EthAddress;

  /**
   * @param {string} tokenId
   * @param {string} liquidity
   * @param {string} amount0Min
   * @param {string} amount1Min
   * @param {number} deadline
   * @param {EthAddress} recipient
   * @param {string} amount0Max
   * @param {string} amount1Max
   * @param {EthAddress} from
   */
  constructor(tokenId:uint256, liquidity:uint128, amount0Min:uint256, amount1Min:uint256, deadline:uint256, recipient:EthAddress, amount0Max:uint128, amount1Max:uint128, from:EthAddress) {
    requireAddress(recipient);
    super(
      'UniWithdrawV3',
      getAddr('UniWithdrawV3'),
      [
        "uint256",
        "uint128",
        "uint256",
        "uint256",
        "uint256",
        "address",
        "uint128",
        "uint128",
      ],
      [tokenId, liquidity, amount0Min, amount1Min, deadline, recipient, amount0Max, amount1Max]
    );

    this.from = from;

    this.mappableArgs = [
      this.args[0],
      this.args[1],
    ];
  }

  async getAssetsToApprove() {
    return [{
      nft: getAddr('UniswapV3PositionManager'),
      tokenId: this.args[0],
      owner: this.from,
      specialApproveLabel: 'uniswap v3'
    }];
  }
}