import { ActionWithL2 } from '../../ActionWithL2';
import { getAddr } from '../../addresses';
import { EthAddress, uint8, uint16 } from '../../types';

/**
 *  SparkCollateralSwitchAction - Enable/disable token usage as collateral for Spark position
 *
 * @category Spark
 */
export class SparkCollateralSwitchAction extends ActionWithL2 {
  /**
   * @param useDefaultMarket If this is true it defaults to the hardcoded market in contract
   * @param market Address provider for specific market
   * @param arrayLength length of two arrays
   * @param assetIds Ids of assets to switch
   * @param useAsCollateral Array of booleans representing collateral state
   */
  constructor(useDefaultMarket:boolean, market:EthAddress, arrayLength:uint8, assetIds:Array<uint16>, useAsCollateral:Array<boolean>) {
    super(
      'SparkCollateralSwitch',
      getAddr('SparkCollateralSwitch'),
      ['uint8', 'bool', 'uint16[]', 'bool[]', 'address'],
      [arrayLength, useDefaultMarket, assetIds, useAsCollateral, market],
    );
  }

  encodeInputs() {
    // executeActionDirectL2
    let encodedInput = '0x2895f3aa';
    // arrayLength
    encodedInput = encodedInput.concat(this.numberToBytes1(this.args[0]));
    // useDefaultMarket
    encodedInput = encodedInput.concat(this.boolToBytes1(this.args[1]));
    const arrayLength = this.args[0];
    for (let i = 0; i < arrayLength; i++) {
      // assetIds[i]
      encodedInput = encodedInput.concat(this.numberToBytes2(this.args[2][i]));
      // useAsCollateral[i]
      encodedInput = encodedInput.concat(this.boolToBytes1(this.args[3][i]));
    }
    if (!this.args[1]) {
      // market
      encodedInput = encodedInput.concat(this.addressToBytes20(this.args[4]));
    }
    return encodedInput;
  }
}