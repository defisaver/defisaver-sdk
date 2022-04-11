const L2Action = require("../../L2Action");
const { getAddr } = require('../../addresses.js');

/**
 * AaveV3SetEModeAction - Set EMode for the proxy AaveV3 position
 */
class AaveV3SetEModeAction extends L2Action {
  /**
   * @param categoryId {EthAddress} ID of the category emode
   * @param useOnDefaultMarket {boolean} If this is true it defaults to the hardcoded market in contract
   * @param market {EthAddress} Address provider for specific market
   */
  constructor(categoryId, useOnDefaultMarket, market) {
    super('AaveV3SetEMode', getAddr('AaveV3SetEMode'),
    [['uint8', 'bool', 'address']],
    [[categoryId, useOnDefaultMarket, market]]
    );

    this.mappableArgs = [
      this.args[0][2],
    ];
  }
  encodeInputs() {
    // executeActionDirectL2
    let encodedInput = "0x2895f3aa";
    // categoryId
    encodedInput = encodedInput.concat(this.numberToBytes1(this.args[0][0]));
    // useOnDefaultMarket
    encodedInput = encodedInput.concat(this.boolToBytes1(this.args[0][1]));
    if (!this.args[0][1]){
      // market
      encodedInput = encodedInput.concat(this.addressToBytes20(this.args[0][2]));
    }

    return encodedInput;
  }

}

module.exports = AaveV3SetEModeAction;
