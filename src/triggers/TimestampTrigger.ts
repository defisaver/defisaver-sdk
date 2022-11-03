import {Action}  from "../Action";
import { getAddr } from "../addresses.js";
import {uint256} from '../types';

/**
 * 
 * 
 * @category Triggers
 */
export class TimestampTrigger extends Action {

  constructor(nextTimestamp:uint256) {
    super("TimestampTrigger", getAddr("TimestampTrigger"), ["uint256"], [nextTimestamp]);
  }
}