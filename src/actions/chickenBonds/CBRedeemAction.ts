import Action from "../../Action";
import { requireAddress } from "../../utils/general";
import { getAddr } from '../../addresses.js';
import {EthAddress,uint256} from '../../types';

/**
 * CBRedeemAction - Redeems bLUSD for Lusd (might also get yTokens)
 */
export default class CBRedeemAction extends Action {
  /**
   * @param bLUSDAmount {string} Amount of bLUSD
   * @param minLUSDFromSP {string} Min amount of lusd to receive
   * @param from {EthAddress}
   * @param to {EthAddress}
   */
  constructor(bLUSDAmount:uint256, minLUSDFromSP:uint256, from:EthAddress, to:EthAddress) {
    requireAddress(from);
    requireAddress(to);
    super('CBRedeem', getAddr('CBRedeem'), ['uint256','uint256','address','address'], [...arguments]);
  }

  async getAssetsToApprove() {
    return [{asset: getAddr('BLUSD'), owner: this.args[2]}]
  }

}