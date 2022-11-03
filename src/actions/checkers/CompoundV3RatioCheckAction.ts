import {Action}  from "../../Action";
import { getAddr } from "../../addresses.js";
import {uint8,uint256,EthAddress} from '../../types';

/**
 * CompoundV3RatioCheckAction - Checks comp V3 ratio for user position and reverts if faulty
 * 
 * @category Checkers
 */
export class CompoundV3RatioCheckAction extends Action {
  /**
   * @param ratioState {uint8} If it should lower/higher
   * @param targetRatio {string} The ratio user want to be at
   * @param market {address} Address of compV3 market
   * @param user {address} Address of the user we are checking the ratio for (default to proxy)
   */
  constructor(ratioState:uint8, targetRatio:uint256, market:EthAddress, user:EthAddress) {
    super("CompV3RatioCheck", getAddr("CompV3RatioCheck"), ["uint8","uint256","address","address"], [ratioState, targetRatio, market, user]);

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3]
    ];
  }
}