import { ActionWithL2 } from '../../ActionWithL2';
import { getAddr } from '../../addresses';
import {
  EthAddress, uint8, uint16, uint256,
} from '../../types';
import { requireAddress } from '../../utils/general';

/**
 * SparkBorrowAction - Borrow a token from Spark
 *
 * @category Spark
 */
export class SparkBorrowAction extends ActionWithL2 {
  /**
   * @param useDefaultMarket If this is true it defaults to the hardcoded market in contract
   * @param market Address provider for specific market
   * @param amount Amount of tokens to be borrowed
   * @param to The address we are sending the borrowed tokens to
   * @param rateMode Type of borrow debt [Stable: 1, Variable: 2]
   * @param assetId The id of the token to be borrowed
   * @param useOnBehalf use on behalf or default to proxy
   * @param onBehalf On whose behalf we borrow the tokens, defaults to proxy
   */
  constructor(useDefaultMarket: boolean, market: EthAddress, amount: uint256, to: EthAddress, rateMode: uint8, assetId: uint16, useOnBehalf: boolean, onBehalf: EthAddress = getAddr('Empty')) {
    requireAddress(to);
    super('SparkBorrow', getAddr('SparkBorrow'),
      ['uint256', 'address', 'uint8', 'uint16', 'bool', 'bool', 'address', 'address'],
      [amount, to, rateMode, assetId, useDefaultMarket, useOnBehalf, market, onBehalf],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
      this.args[4],
      this.args[5],
      this.args[6],
      this.args[7],
    ];
  }

  encodeInputs() {
    // executeActionDirectL2
    let encodedInput = '0x2895f3aa';
    // amount
    encodedInput = encodedInput.concat(this.numberToBytes32(this.args[0]));
    // to
    encodedInput = encodedInput.concat(this.addressToBytes20(this.args[1]));
    // rateMode
    encodedInput = encodedInput.concat(this.numberToBytes1(this.args[2]));
    // assetId
    encodedInput = encodedInput.concat(this.numberToBytes2(this.args[3]));
    // useDefaultMarket
    encodedInput = encodedInput.concat(this.boolToBytes1(this.args[4]));
    // useOnBehalf
    encodedInput = encodedInput.concat(this.boolToBytes1(this.args[5]));
    if (!this.args[4]) {
      // market
      encodedInput = encodedInput.concat(this.addressToBytes20(this.args[6]));
    }
    if (this.args[5]) {
      // onBehalf
      encodedInput = encodedInput.concat(this.addressToBytes20(this.args[7]));
    }
    return encodedInput;
  }
}
