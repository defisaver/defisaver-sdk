import {Action}  from "../../Action";
import { getAddr } from '../../addresses';
import {EthAddress,uint256} from '../../types';
import { requireAddress } from "../../utils/general";

/**
 * Action that adds liquidity to G-UNI pool of interest (mints G-UNI LP tokens)
 * 
 * @category GUni
*/
export class GUniDeposit extends Action {
    /**  @param pool address of G-UNI pool to add liquidity to
    * @param token0 address of token0
    * @param token1 address of token1
    * @param amount0Max the maximum amount of token0 msg.sender willing to input
    * @param amount1Max the maximum amount of token1 msg.sender willing to input
    * @param amount0Min the minimum amount of token0 actually input (slippage protection)
    * @param amount1Min the minimum amount of token1 actually input (slippage protection)
    * @param to account to receive minted G-UNI tokens
    * @param from account from which to pull underlying tokens from
    */
  constructor(pool:EthAddress, token0:EthAddress, token1:EthAddress, amount0Max:uint256, amount1Max:uint256, amount0Min:uint256, amount1Min:uint256, to:EthAddress, from:EthAddress) {
    requireAddress(to);
    super(
        'GUniDeposit',
        getAddr('GUniDeposit'),
        ['address', 'address', 'address', 'uint256', 'uint256', 'uint256', 'uint256', 'address', 'address'],
        [pool, token0, token1, amount0Max, amount1Max, amount0Min, amount1Min, to, from]
    );
    this.mappableArgs = [
        this.args[3],
        this.args[4],
        this.args[5],
        this.args[6],
    ];
  }

  async getAssetsToApprove() {
    const approveArr = [];

    approveArr.push({asset: this.args[1], owner: this.args[8]});
    approveArr.push({asset: this.args[2], owner: this.args[8]});

    return approveArr;
  }
}