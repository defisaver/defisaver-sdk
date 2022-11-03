import {Action}  from "../Action";
import { getAddr } from "../addresses.js";
import {EthAddress,uint256,uint8} from '../types';

/**
 * 
 * 
 * @category Triggers
 */
export class AaveV3RatioTrigger extends Action {

  constructor(user:EthAddress, market:EthAddress, ratio:uint256, state:uint8) {
    super("AaveV3RatioTrigger", getAddr("AaveV3RatioTrigger"), [["address", "address", "uint256", "uint8"]], [[user,market,ratio,state]]);
  }
}