import Action from "../Action";
import { getAddr } from "../addresses.js";
import {EthAddress,uint256,uint8} from '../types';

export default class ChainLinkPriceTrigger extends Action {

  constructor(tokenAddr:EthAddress, price:uint256, state:uint8) {
    super("ChainLinkPriceTrigger", getAddr("ChainLinkPriceTrigger"), ["address", "uint256", "uint8"], [...arguments]);
  }

}