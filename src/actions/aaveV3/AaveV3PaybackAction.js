const L2Action = require("../../L2Action");
const {getAssetInfoByAddress} = require("@defisaver/tokens");
const { getAddr } = require('../../addresses.js');

/**
 * AaveV3PaybackAction - Payback debt on Aave using underlying token
 */
class AaveV3PaybackAction extends L2Action {
  /**
   * @param market {EthAddress} Address provider for specific market
   * @param amount {string} Amount of tokens to be payed back
   * @param from {EthAddress} Tokens will be supplied from this address
   * @param rateMode {number} Type of borrow debt [Stable: 1, Variable: 2]
   * @param tokenAddr {EthAddress} Address of underlying asset
   * @param assetId {number} The id of the underlying asset to be repaid
   * @param useOnBehalf {boolean} use on behalf param or default to proxy
   * @param onBehalf {EthAddress} For what user we are paying back the debt, defaults to proxy
   */
  constructor(market, amount, from, rateMode, tokenAddr, assetId, useOnBehalf , onBehalf = getAddr('Empty')) {
    super('AaveV3Payback', getAddr('AaveV3Payback'),
    [['address','uint256','address','uint8','uint16','bool', 'address']],
    [[market, amount, from, rateMode, assetId, useOnBehalf, onBehalf]]
    );

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
      this.args[0][2],
      this.args[0][6],
    ];
    this.tokenForApproval = tokenAddr;
  }

  async getAssetsToApprove() {
    const asset = getAssetInfoByAddress(this.tokenForApproval);
    if (asset.symbol !== 'ETH') return [{asset: this.tokenForApproval, owner: this.args[3]}];
    return [];
  }

  encodeInputs() {
    // executeActionDirectL2
    let encodedInput = "0x2895f3aa";
    // market
    encodedInput = encodedInput.concat(this.addressToBytes20(this.args[0][0]));
    // amount
    encodedInput = encodedInput.concat(this.numberToBytes32(this.args[0][1]));
    // from
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

module.exports = AaveV3PaybackAction;
