import Action from "../Action";
import { getAddr } from "../addresses.js";
import {EthAddress,uint256,uint80} from '../types';

export default class TrailingStopTrigger extends Action {
  constructor(tokenAddr:EthAddress, percentage:uint256, roundId:uint80) {
    super("TrailingStopTrigger", getAddr("TrailingStopTrigger"), ["address", "uint256", "uint80"], [...arguments]);
  }

}