const ActionWithL2 = require("../../ActionWithL2");
const { getAddr } = require('../../addresses.js');

/**
 * AaveV3BorrowAction - Borrow a token from AaveV3
 */
class AaveV3BorrowAction extends ActionWithL2 {
   /**
   * @param useDefaultMarket {boolean} If this is true it defaults to the hardcoded market in contract
   * @param market {EthAddress} Address provider for specific market
   * @param amount {string} Amount of tokens to be borrowed
   * @param to {EthAddress} The address we are sending the borrowed tokens to
   * @param rateMode {number} Type of borrow debt [Stable: 1, Variable: 2]
   * @param assetId {number} The id of the token to be borrowed
   * @param useOnBehalf {boolean} use on behalf or default to proxy
   * @param [onBehalf] {EthAddress} On whose behalf we borrow the tokens, defaults to proxy
   */
  constructor(useDefaultMarket, market, amount, to, rateMode, assetId, useOnBehalf , onBehalf = getAddr('Empty')) {
    super('AaveV3Borrow', getAddr('AaveV3Borrow'),
    ['uint256','address','uint8','uint16','bool','bool','address','address'],
    [amount, to, rateMode, assetId, useDefaultMarket, useOnBehalf, market, onBehalf]
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[6],
      this.args[7],
    ];
  }

  encodeInputs() {
    // executeActionDirectL2
    let encodedInput = "0x2895f3aa";
    // amount
    encodedInput = encodedInput.concat(this.numberToBytes32(this.args[0]));
    // to
    encodedInput = encodedInput.concat(this.addressToBytes20(this.args[1]));
    // rateMode
    encodedInput = encodedInput.concat(this.numberToBytes1(this.args[2]));
    // assetId
    encodedInput = encodedInput.concat(this.numberToBytes2(this.args[3]));
    // useDefaultMarket
    encodedInput = encodedInput.concat(this.boolToBytes1(this.args[4]))
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

module.exports = AaveV3BorrowAction;
