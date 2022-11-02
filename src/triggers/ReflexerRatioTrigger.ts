import Action from "../Action";
import { getAddr } from "../addresses";
import {uint256,uint8} from '../types';

export default class ReflexerRatioTrigger extends Action {

  constructor(vaultId:uint256, ratio:uint256, state:uint8) {
    super("ReflexerRatioTrigger", getAddr("ReflexerRatioTrigger"), ["uint256", "uint256", "uint8"], [...arguments]);
  }
}