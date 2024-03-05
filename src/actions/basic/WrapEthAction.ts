import { ActionWithL2 } from '../../ActionWithL2';
import { getAddr } from '../../addresses';
import { uint256 } from '../../types';

/**
 * Wraps a specified amount of ETH from the wallet to WETH on the recipe
 *
 * @category BasicActions
 */
export class WrapEthAction extends ActionWithL2 {
  /**
   * @param amount Wrap amount
   * @param includeEthInTx If true, the transaction will include the ETH value in the transaction
   */
  constructor(amount:uint256, includeEthInTx = true) {
    super('WrapEth', getAddr('WrapEth'), ['uint256', 'bool'], [amount, includeEthInTx]);
  }

  async getEthValue() {
    return this.args[1] ? this.args[0] : 0;
  }

  encodeInputs() {
    // executeActionDirectL2
    let encodedInput = '0x2895f3aa';
    // amount
    encodedInput = encodedInput.concat(this.numberToBytes32(this.args[0]));
    return encodedInput;
  }
}