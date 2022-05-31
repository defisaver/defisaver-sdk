const ActionWithL2 = require("../../ActionWithL2");
const { getAddr } = require('../../addresses.js');

/**
 * AaveV3SwapBorrowRateModeAction - Swaps proxy positions borrow rate mode between stable and variable.
 */
class AaveV3SwapBorrowRateModeAction extends ActionWithL2 {
  /**
   * @param rateMode {string} rate mode the user is swapping from.[Stable: 1, Variable: 2]
   * @param assetId {number} id of the underlying asset in the market
   * @param useDefaultMarket {boolean} If this is true it defaults to the hardcoded market in contract
   * @param market {EthAddress} Address provider for specific market
   *
   */
  constructor(rateMode, assetId, useDefaultMarket, market) {
    super('AaveV3SwapBorrowRateMode', getAddr('AaveV3SwapBorrowRateMode'),
    ['uint256','uint16','bool','address'],
    [rateMode, assetId, useDefaultMarket, market]
    );

    this.mappableArgs = [
      this.args[0][0],
      this.args[3],
    ];
  }
  encodeInputs() {
    // executeActionDirectL2
    let encodedInput = "0x2895f3aa";
    // rateMode
    encodedInput = encodedInput.concat(this.numberToBytes32(this.args[0]));
    // assetId
    encodedInput = encodedInput.concat(this.numberToBytes2(this.args[1]))
    // useOnDefaultMarket
    encodedInput = encodedInput.concat(this.boolToBytes1(this.args[2]))
    if (!this.args[2]){
      // market
      encodedInput = encodedInput.concat(this.addressToBytes20(this.args[3]));
    }
    return encodedInput;
  }
}

module.exports = AaveV3SwapBorrowRateModeAction;
