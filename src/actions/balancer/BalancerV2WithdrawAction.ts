import {Action}  from "../../Action";
import { requireAddress } from "../../utils/general";
import { getAddr } from '../../addresses.js';
import {EthAddress,uint256,bytes32,bytes} from '../../types';


/**
 * BalancerV2WithdrawAction - Withdraw tokens from Balancer pool
 * @category BalancerV2
 */
export class BalancerV2WithdrawAction extends Action {
  from:EthAddress;

  /**
   * @param poolId
   * @param from
   * @param to
   * @param lpTokenAmount;
   * @param tokens
   * @param minAmountsOut
   * @param userData
   */
  constructor(poolId:bytes32, from:EthAddress, to:EthAddress, lpTokenAmount:uint256, tokens:Array<EthAddress>, minAmountsOut:Array<uint256>, userData:bytes) {
    requireAddress(to);
    super(
      'BalancerV2Withdraw',
      getAddr('BalancerV2Withdraw'),
      [
        "bytes32",
        "address",
        "address",
        "uint256",
        "address[]",
        "uint256[]",
        "bytes",
      ],
      [poolId, from, to, lpTokenAmount, tokens, minAmountsOut, userData]
    );

    this.from = from;

    this.mappableArgs = [
      this.args[1],
      this.args[2],
      this.args[3],
    ];

    for (let i = 0; i < this.args[5].length; i++){
      this.mappableArgs.push(this.args[5][i]);
    }
  }

  async getAssetsToApprove() {
    const approveArr = [];
    const token = this.args[0].slice(0,42);
    approveArr.push({asset: token, owner: this.args[1], specialApproveLabel: 'balancer'});
    return approveArr;
  }
}