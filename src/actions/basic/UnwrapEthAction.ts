import ActionWithL2 from "../../ActionWithL2";
import { requireAddress } from "../../utils/general";
import { getAddr } from '../../addresses.js';
import {EthAddress,uint256} from '../../types';

/**
 * Unwraps a specified amount of WETH from the proxy
 */
export default class UnwrapEthAction extends ActionWithL2 {
  /**
   * @param amount {string} Token address
   * @param to {string} Transfer recipient
   */
  constructor(amount:uint256, to:EthAddress) {
    requireAddress(to);
    super(
      'UnwrapEth',
      getAddr('UnwrapEth'),
      [
        "uint256",
        "address"
      ],
      [...arguments]
    );
  }
  encodeInputs(){
    // executeActionDirectL2
    let encodedInput = "0x2895f3aa";
    // amount
    encodedInput = encodedInput.concat(this.numberToBytes32(this.args[0][0]));
    // to
    encodedInput = encodedInput.concat(this.addressToBytes20(this.args[0][1]));

    return encodedInput;
  }
}