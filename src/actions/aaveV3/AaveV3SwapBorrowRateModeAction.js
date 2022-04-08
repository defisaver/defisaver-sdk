const L2Action = require("../../L2Action");
const {getAssetInfoByAddress} = require("@defisaver/tokens");
const { getAddr } = require('../../addresses.js');

/**
 * AaveV3SwapBorrowRateModeAction - Swaps proxy positions borrow rate mode between stable and variable.
 */
class AaveV3SwapBorrowRateModeAction extends L2Action {
  /**
   * @param asset {EthAddress} address of the underlying asset
   * @param rateMode {string} rate mode the user is swapping from.[Stable: 1, Variable: 2]
   * @param useDefaultMarket {boolean} If this is true it defaults to the hardcoded market in contract
   * @param market {EthAddress} Address provider for specific market
   * 
   */
  constructor(asset, rateMode, useDefaultMarket, market) {
    super('AaveV3SwapBorrowRateMode', getAddr('AaveV3SwapBorrowRateMode'), 
    [['address','uint256','bool','address']],
    [[asset, rateMode, useDefaultMarket, market]]
    );

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][3],
    ];
  }
  encodeInputs() {
    // executeActionDirectL2
    let encodedInput = "0x2895f3aa";
    // asset
    encodedInput = encodedInput.concat(this.addressToBytes20(this.args[0][0]));
    // rateMode
    encodedInput = encodedInput.concat(this.numberToBytes32(this.args[0][1]));
    // useOnDefaultMarket
    encodedInput = encodedInput.concat(this.boolToBytes1(this.args[0][2]))
    if (!this.args[0][2]){
      // market
      encodedInput = encodedInput.concat(this.addressToBytes20(this.args[0][3]));
    }
    return encodedInput;
  }
}

module.exports = AaveV3SwapBorrowRateModeAction;
