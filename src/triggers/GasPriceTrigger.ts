const Action = require("../Action");
const {getAddr} = require("../addresses.js");
import {uint256} from '../types';

export default class GasPriceTrigger extends Action {

  constructor(maxGasPrice:uint256) {
    super("GasPriceTrigger", getAddr("GasPriceTrigger"), ["uint256"], [...arguments]);
  }
}