const L2Action = require("../../L2Action");
const {getAssetInfoByAddress} = require("@defisaver/tokens");
const { getAddr } = require('../../addresses.js');

/**
 * AaveV3SetEModeAction - Set EMode for the proxy AaveV3 position
 */
class AaveV3SetEModeAction extends L2Action {
  /**
   * @param market {EthAddress}
   * @param categoryId {EthAddress}
   */
  constructor(market, categoryId) {
    super('AaveV3SetEMode', getAddr('AaveV3SetEMode'), 
    [['address','uint8']],
    [[market, categoryId]]
    );

    this.mappableArgs = [
      this.args[0][0],
    ];
  }
  encodeInputs() {
    // executeActionDirectL2
    let encodedInput = "0x2895f3aa";
    // market
    encodedInput = encodedInput.concat(this.addressToBytes20(this.args[0][0]));
    // assetId
    encodedInput = encodedInput.concat(this.numberToBytes1(this.args[0][1]));
    // amount
    return encodedInput;
  }

}

module.exports = AaveV3SetEModeAction;
