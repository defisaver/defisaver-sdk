    const L2Action = require("../../L2Action");
const {getAssetInfoByAddress} = require("@defisaver/tokens");
const { getAddr } = require('../../addresses.js');

/**
 * AaveV3WithdrawAction - Withdraw a previously supplied token from a position in AaveV3
 */
class AaveV3WithdrawAction extends L2Action {
  /**
   * @param assetId {number} The id of the token to be deposited
   * @param useDefaultMarket {boolean} If this is true it defaults to the hardcoded market in contract
   * @param amount {string} Amount of tokens to be withdrawn -> send type(uint).max for whole amount
   * @param to {EthAddress} Where the withdrawn tokens will be sent
   * @param market {EthAddress} Address provider for specific market
   */
  constructor(assetId, useDefaultMarket, amount, to, market) {
    super('AaveV3Withdraw', getAddr('AaveV3Withdraw'), 
    [['uint16','bool','uint256','address','address']],
    [[assetId, useDefaultMarket, amount, to, market]]
    );

    this.mappableArgs = [
      this.args[0][2],
      this.args[0][3],
      this.args[0][4],
    ];
  }
  encodeInputs() {
    // executeActionDirectL2
    let encodedInput = "0x2895f3aa";
    // assetId
    encodedInput = encodedInput.concat(this.numberToBytes2(this.args[0][0]));
    // useOnDefaultMarket
    encodedInput = encodedInput.concat(this.boolToBytes1(this.args[0][1]))
    // amount
    encodedInput = encodedInput.concat(this.numberToBytes32(this.args[0][2]));
    // from
    encodedInput = encodedInput.concat(this.addressToBytes20(this.args[0][3]));
    if (!this.args[0][1]){
      // market
      encodedInput = encodedInput.concat(this.addressToBytes20(this.args[0][4]));
    }
    return encodedInput;
  }
}

module.exports = AaveV3WithdrawAction;
