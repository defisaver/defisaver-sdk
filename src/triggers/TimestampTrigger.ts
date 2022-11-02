import Action from "../Action";
import { getAddr } from "../addresses.js";
import {uint256} from '../types';

export default class TimestampTrigger extends Action {

  constructor(nextTimestamp:uint256) {
    super("TimestampTrigger", getAddr("TimestampTrigger"), ["uint256"], [...arguments]);
  }
}