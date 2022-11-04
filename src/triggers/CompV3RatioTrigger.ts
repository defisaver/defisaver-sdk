import {Action}  from "../Action";
import { getAddr } from "../addresses";
import {EthAddress,uint256,uint8} from '../types';

/**
 * 
 * 
 * @category Triggers
 */
export class CompV3RatioTrigger extends Action {

  constructor(user:EthAddress, market:EthAddress, ratio:uint256, state:uint8) {
    super("CompV3RatioTrigger", getAddr("CompV3RatioTrigger"), [["address", "address", "uint256", "uint8"]], [[user,market,ratio,state]]);
  }
}