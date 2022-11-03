import {Action}  from "../../Action";
import { requireAddress } from "../../utils/general";
import { getAddr } from '../../addresses.js';
import {EthAddress,uint256} from '../../types';

/**
 * CBRedeemAction - Redeems bLUSD for Lusd (might also get yTokens)
 * 
 * @category ChickenBonds
 */
export class CBRedeemAction extends Action {
  /**
   * @param bLUSDAmount Amount of bLUSD
   * @param minLUSDFromSP Min amount of lusd to receive
   * @param from
   * @param to
   */
  constructor(bLUSDAmount:uint256, minLUSDFromSP:uint256, from:EthAddress, to:EthAddress) {
    requireAddress(from);
    requireAddress(to);
    super('CBRedeem', getAddr('CBRedeem'), ['uint256','uint256','address','address'], [bLUSDAmount,minLUSDFromSP,from,to]);
  }

  async getAssetsToApprove() {
    return [{asset: getAddr('BLUSD'), owner: this.args[2]}]
  }

}