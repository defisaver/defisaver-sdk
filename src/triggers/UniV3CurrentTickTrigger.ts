import Action from "../Action";
import { getAddr } from "../addresses.js";
import {uint256,uint8} from '../types';

export default class UniV3CurrentTickTrigger extends Action {
  constructor(tokenId:uint256, state:uint8) {
    super("UniV3CurrentTickTrigger", getAddr("UniV3CurrentTickTrigger"), ["uint256", "uint8"], [...arguments]);
  }
}