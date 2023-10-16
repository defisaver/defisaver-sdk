import { ActionWithL2 } from '../../ActionWithL2';
import { getAddr } from '../../addresses';
import {
  EthAddress, uint8, uint16, uint256,
} from '../../types';

/**
 * SparkDelegateCredit - Delegate credit
 *
 * @category Spark
 */
export class SparkDelegateCredit extends ActionWithL2 {
  /**
   * @param useOnDefaultMarket If this is true it defaults to the hardcoded market in contract
   * @param market Address provider for specific market
   * @param amount Amount of tokens to be payed back
   * @param rateMode Type of borrow debt [Stable: 1, Variable: 2]
   * @param assetId The id of the token to be borrowed
   * @param delegatee The id of the underlying asset to be repaid
   */
  constructor(useOnDefaultMarket: boolean, market:EthAddress, amount:uint256, rateMode:uint8, assetId:uint16, delegatee:EthAddress) {
    super('SparkDelegateCredit', getAddr('SparkDelegateCredit'),
      ['uint256', 'address', 'uint16', 'uint8', 'bool', 'address'],
      [amount, delegatee, assetId, rateMode, useOnDefaultMarket, market],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
      this.args[4],
      this.args[5],
    ];
  }

  encodeInputs() {
    // executeActionDirectL2
    let encodedInput = '0x2895f3aa';
    // amount
    encodedInput = encodedInput.concat(this.numberToBytes32(this.args[0]));
    // delegatee
    encodedInput = encodedInput.concat(this.addressToBytes20(this.args[1]));
    // assetId
    encodedInput = encodedInput.concat(this.numberToBytes2(this.args[2]));
    // rateMode
    encodedInput = encodedInput.concat(this.numberToBytes1(this.args[3]));
    // useDefaultMarket
    encodedInput = encodedInput.concat(this.boolToBytes1(this.args[4]));
    if (!this.args[4]) {
      // market
      encodedInput = encodedInput.concat(this.addressToBytes20(this.args[5]));
    }
    return encodedInput;
  }
}
