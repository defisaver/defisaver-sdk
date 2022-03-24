const L2Action = require("../../L2Action");
const {getAssetInfoByAddress} = require("@defisaver/tokens");
const { getAddr } = require('../../addresses.js');

/**
 * AaveV3BorrowAction - Borrow a token from AaveV3
 */
class AaveV3BorrowAction extends L2Action {
   /**
   * @param market {EthAddress}
   * @param amount {string}
   * @param to {EthAddress}
   * @param rateMode
   * @param assetId {EthAddress} 
   * @param useOnBehalf {boolean} 
   * @param onBehalf {EthAddress} 
   */
  constructor(market, amount, to, rateMode, assetId, useOnBehalf , onBehalf = getAddr('Empty')) {
    super('AaveV3Borrow', getAddr('AaveV3Borrow'), 
    [['address','uint256','address','uint8','uint16','bool', 'address']],
    [[market, amount, to, rateMode, assetId, useOnBehalf, onBehalf]]
    );

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
      this.args[0][2],
      this.args[0][6],
    ];
  }

  encodeInputs() {
    // executeActionDirectL2
    let encodedInput = "0x2895f3aa";
    // market
    encodedInput = encodedInput.concat(this.addressToBytes20(this.args[0][0]));
    // amount
    encodedInput = encodedInput.concat(this.numberToBytes32(this.args[0][1]));
    // to
    encodedInput = encodedInput.concat(this.addressToBytes20(this.args[0][2]));
    // rateMode
    encodedInput = encodedInput.concat(this.numberToBytes1(this.args[0][3]));
    // assetId
    encodedInput = encodedInput.concat(this.numberToBytes2(this.args[0][4]));
    // useOnBehalf
    encodedInput = encodedInput.concat(this.boolToBytes1(this.args[0][5]));
    if (this.args[0][5]) {
      // onBehalf
      encodedInput = encodedInput.concat(this.addressToBytes20(this.args[0][6]));
    }
    return encodedInput;
  }
}

module.exports = AaveV3BorrowAction;
