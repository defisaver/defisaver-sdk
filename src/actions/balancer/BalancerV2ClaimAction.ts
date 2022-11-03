import {Action}  from "../../Action";
import { requireAddress } from "../../utils/general";
import { getAddr } from '../../addresses.js';
import {EthAddress,uint8,uint16,uint256,bytes32,bytes} from '../../types';

/** 
 * BalancerV2ClaimAction - Claim BAL governance tokens
 * @category BalancerV2
 */
export class BalancerV2ClaimAction extends Action {
  /**
   * @param {EthAddress} liquidityProvider
   * @param {EthAddress} to
   * @param {uint256[]} weeks
   * @param {uint256} balances
   * @param {bytes32[][]} merkleProofs
   */
  constructor(liquidityProvider: EthAddress, to: EthAddress, weeks: Array<uint256>, balances:uint256, merkleProofs:Array<Array<bytes32>>) {
    requireAddress(to);
    super(
      'BalancerV2Claim',
      getAddr('BalancerV2Claim'),
      [
        "address",
        "address",
        "uint256[]",
        "uint256[]",
        "bytes32[][]",
      ],
      [liquidityProvider, to, weeks, balances, merkleProofs]
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
    ];
  }

  async getAssetsToApprove() {

    const approveArr = [];
      if (this.args[0] !== this.args[1]){
        const tokenAddress = getAddr('BalancerToken');
        approveArr.push({asset: tokenAddress, owner: this.args[0]});
      }
    return approveArr;
  }
}