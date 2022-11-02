import Action from "../Action";
import { getAddr } from "../addresses.js";
import {uint256,uint8} from '../types';


export default class MakerRatioTrigger extends Action {

  constructor(vaultId:uint256, ratio:uint256, state:uint8) {
    super("McdRatioTrigger", getAddr("McdRatioTrigger"), ["uint256", "uint256", "uint8"], [...arguments]);
  }
}