const L2Action = require("../../L2Action");
const {requireAddress} = require("../../utils/general.js");
const { getAddr } = require('../../addresses.js');

/**
 *  AaveV3CollateralSwitchAction - Aave enable/disable token usage as collateral for AaveV3 position
 */
class AaveV3CollateralSwitchAction extends L2Action {
    /**
   * @param arrayLength {number} length of two arrays
   * @param useDefaultMarket {boolean} If this is true it defaults to the hardcoded market in contract
   * @param assetIds {Array<number>}
   * @param useAsCollateral {Array<boolean>}
   * @param market {EthAddress} Address provider for specific market
   */
  constructor(useDefaultMarket, market, arrayLength, assetIds, useAsCollateral) {
    super(
      'AaveV3CollateralSwitch',
      getAddr('AaveV3CollateralSwitch'),
      [['uint8','bool', 'uint16[]', 'bool[]','address']],
      [[arrayLength, useDefaultMarket, assetIds, useAsCollateral, market]],
    );
  }
  encodeInputs() {
    // executeActionDirectL2
    let encodedInput = "0x2895f3aa";
    // arrayLength
    encodedInput = encodedInput.concat(this.numberToBytes1(this.args[0][0]));
    // useDefaultMarket 
    encodedInput = encodedInput.concat(this.boolToBytes1(this.args[0][1]));
    const arrayLength = this.args[0][1];
    for (let i = 0; i <= arrayLength; i++){
      // assetIds[i]
      encodedInput = encodedInput.concat(this.numberToBytes2(this.args[0][2][i]));
      // useAsCollateral[i]
      encodedInput = encodedInput.concat(this.boolToBytes1(this.args[0][3][i]));
    }
    if (!this.args[0][1]){
      // market
      encodedInput = encodedInput.concat(this.addressToBytes20(this.args[0][4]));
    }
    return encodedInput;
  }
}

module.exports = AaveV3CollateralSwitchAction;
