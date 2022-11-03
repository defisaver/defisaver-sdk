import {Action}  from "../Action";
import { getAddr } from "../addresses.js";
import {EthAddress,uint256,uint8} from '../types';

/**
 * 
 * 
 * @category Triggers
 */
export class CompoundRatioTrigger extends Action {

  constructor(user:EthAddress, ratio:uint256, state:uint8) {
    super("CompoundRatioTrigger", getAddr("CompoundRatioTrigger"), ["address", "uint256", "uint8"], [...arguments]);
  }
}