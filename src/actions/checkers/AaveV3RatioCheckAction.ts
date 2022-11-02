import Action from "../../Action";
import { getAddr } from "../../addresses.js";
import {uint8,uint256} from '../../types';

/**
 * AaveV3RatioCheckAction - Checks aave V3 ratio for users proxy position and reverts if faulty
 */
export default class AaveV3RatioCheckAction extends Action {
  /**
   * @param ratioState {uint8} If it should lower/higher
   * @param targetRatio {string} The ratio user want to be at
   */
  constructor(ratioState:uint8, targetRatio:uint256) {
    super("AaveV3RatioCheck", getAddr("AaveV3RatioCheck"), ["uint8","uint256"], [ratioState, targetRatio]);

    this.mappableArgs = [
      this.args[0],
      this.args[1],
    ];
  }
}