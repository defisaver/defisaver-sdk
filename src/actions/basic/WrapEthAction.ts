import {ActionWithL2} from "../../ActionWithL2";
import { getAddr } from "../../addresses";
import {uint256} from '../../types';

/**
 * Wraps a specified amount of ETH from the wallet to WETH on the recipe
 * 
 * @category BasicActions
 */
export class WrapEthAction extends ActionWithL2 {
  /**
   * @param amount Wrap amount
   */
  constructor(amount:uint256) {
    super("WrapEth", getAddr("WrapEth"), ["uint256"], [amount]);
  }

  async getEthValue() {
    return this.args[0];
  }

  encodeInputs() {
    // executeActionDirectL2
    let encodedInput = "0x2895f3aa";
    // amount
    encodedInput = encodedInput.concat(this.numberToBytes32(this.args[0]));
    return encodedInput;
  }
}