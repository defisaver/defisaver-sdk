import {Action}  from "../Action";
import { getAddr } from "../addresses.js";
import {EthAddress,uint256,uint80} from '../types';

/**
 * 
 * 
 * @category Triggers
 */
export class TrailingStopTrigger extends Action {
  constructor(tokenAddr:EthAddress, percentage:uint256, roundId:uint80) {
    super("TrailingStopTrigger", getAddr("TrailingStopTrigger"), ["address", "uint256", "uint80"], [...arguments]);
  }

}