import Action from "../Action";
import { getAddr } from "../addresses";
import {EthAddress,uint256,uint8} from '../types';

export default class LiquityRatioTrigger extends Action {

  constructor(troveOwner:EthAddress, ratio:uint256, state:uint8) {
    super(
      "LiquityRatioTrigger",
      getAddr("LiquityRatioTrigger"),
      ["addresss", "uint256", "uint8"],
      [...arguments]
    );
  }
}