const L2Action = require("../../L2Action");
const { getAddr } = require('../../addresses.js');

/**
 * AaveV3WithdrawAction - Withdraw a previously supplied token from a position in AaveV3
 */
class AaveV3WithdrawAction extends L2Action {
  /**
   * @param market {EthAddress} Address provider for specific market
   * @param assetId {number} The id of the token to be deposited
   * @param amount {string} Amount of tokens to be withdrawn -> send type(uint).max for whole amount
   * @param to {EthAddress} Where the withdrawn tokens will be sent
   */
  constructor(market, assetId, amount, to) {
    super('AaveV3Withdraw', getAddr('AaveV3Withdraw'),
    [['address','uint16','uint256','address']],
    [[market, assetId, amount, to]]
    );

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][2],
      this.args[0][3],
    ];
  }
  encodeInputs() {
    // executeActionDirectL2
    let encodedInput = "0x2895f3aa";
    // market
    encodedInput = encodedInput.concat(this.addressToBytes20(this.args[0][0]));
    // assetId
    encodedInput = encodedInput.concat(this.numberToBytes2(this.args[0][1]));
    // amount
    encodedInput = encodedInput.concat(this.numberToBytes32(this.args[0][2]));
    // from
    encodedInput = encodedInput.concat(this.addressToBytes20(this.args[0][3]));
    return encodedInput;
  }
}

module.exports = AaveV3WithdrawAction;
