import Action from "../../Action";
import { requireAddress } from "../../utils/general";
import { getAddr } from '../../addresses.js';
import {EthAddress,uint8,uint16,uint256,bytes32,bytes} from '../../types';

/** 
 * BalancerV2SupplyAction - Supply tokens to Balancer pool
 * @category BalancerV2
 */
export class BalancerV2SupplyAction extends Action {
  /**
   * @param {bytes32} poolId
   * @param {EthAddress} from
   * @param {EthAddress} to
   * @param {address[]} tokens
   * @param {uint256[]} maxAmountsIn
   * @param {bytes} userData
   */
  constructor(poolId:bytes32, from:EthAddress, to:EthAddress, tokens:Array<EthAddress>, maxAmountsIn:Array<uint256>, userData: bytes) {
    requireAddress(to);
    super(
      'BalancerV2Supply',
      getAddr('BalancerV2Supply'),
      [
        "bytes32",
        "address",
        "address",
        "address[]",
        "uint256[]",
        "bytes",
      ],
      [poolId, from, to, tokens, maxAmountsIn, userData]
    );

    this.mappableArgs = [
      this.args[1],
      this.args[2],
    ];
    for (let i = 0; i < this.args[4].length; i++){
      this.mappableArgs.push(this.args[4][i]);
    }
  }

  async getAssetsToApprove() {
    const approveArr :Array<{asset: EthAddress,owner:EthAddress,specialApproveLabel:string}> = [];
    const tokens:Array<EthAddress> = this.args[3];
    tokens.forEach(token => approveArr.push({asset: token, owner: this.args[1], specialApproveLabel: 'balancer'}));

    return approveArr;
  }
}