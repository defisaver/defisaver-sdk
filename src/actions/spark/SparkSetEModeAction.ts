import { ActionWithL2 } from '../../ActionWithL2';
import { getAddr } from '../../addresses';
import { EthAddress, uint8 } from '../../types';
/**
 * SparkSetEModeAction - Set EMode for the proxy Spark position
 *
 * @category Spark
 */
export class SparkSetEModeAction extends ActionWithL2 {
  /**
   * @param useOnDefaultMarket If this is true it defaults to the hardcoded market in contract
   * @param market Address provider for specific market
   * @param categoryId ID of the category emode
   */
  constructor(useOnDefaultMarket: boolean, market: EthAddress, categoryId: uint8) {
    super('SparkSetEMode', getAddr('SparkSetEMode'),
      ['uint8', 'bool', 'address'],
      [categoryId, useOnDefaultMarket, market],
    );

    this.mappableArgs = [
      this.args[2],
    ];
  }

  encodeInputs() {
    // executeActionDirectL2
    let encodedInput = '0x2895f3aa';
    // categoryId
    encodedInput = encodedInput.concat(this.numberToBytes1(this.args[0]));
    // useOnDefaultMarket
    encodedInput = encodedInput.concat(this.boolToBytes1(this.args[1]));
    if (!this.args[1]) {
      // market
      encodedInput = encodedInput.concat(this.addressToBytes20(this.args[2]));
    }

    return encodedInput;
  }
}
