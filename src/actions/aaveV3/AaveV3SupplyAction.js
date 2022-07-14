const ActionWithL2 = require("../../ActionWithL2");
const { getAssetInfoByAddress } = require("@defisaver/tokens");
const { getAddr } = require('../../addresses.js');

/**
 * AaveV3SupplyAction - Supply token to an aave position on Aave V3
 */
class AaveV3SupplyAction extends ActionWithL2 {

  /**
   * @param amount {string} Amount of tokens to be deposited
   * @param from {EthAddress} Tokens will be supplied from this address
   * @param tokenAddress {EthAddress} Address of the token
   * @param assetId {number} The id of the token to be deposited
   * @param enableAsColl {boolean} If we need to enable asset as collateral
   * @param useDefaultMarket {boolean} If this is true it defaults to the hardcoded market in contract
   * @param useOnBehalf {boolean} use on behalf param or default to proxy
   * @param market {EthAddress} Address provider for specific market
   * @param [onBehalf] {EthAddress} For what user we are supplying the tokens, defaults to proxy
   */
  constructor(amount, from, tokenAddress, assetId, enableAsColl, useDefaultMarket, useOnBehalf ,market, onBehalf = getAddr('Empty')) {
    super('AaveV3Supply', getAddr('AaveV3Supply'),
    ['uint256','address','uint16','bool','bool','bool','address','address'],
    [amount, from, assetId, enableAsColl, useDefaultMarket, useOnBehalf, market, onBehalf]
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
      this.args[4],
      this.args[5],
      this.args[6],
      this.args[7],
    ];
    this.tokenForApproval = tokenAddress;
  }

  async getAssetsToApprove() {
    const asset = getAssetInfoByAddress(this.tokenForApproval);
    if (asset.symbol !== 'ETH') return [{asset: this.tokenForApproval, owner: this.args[2]}];
    return [];
  }

  encodeInputs() {
    // executeActionDirectL2
    let encodedInput = "0x2895f3aa";
    // amount
    encodedInput = encodedInput.concat(this.numberToBytes32(this.args[0]));
    // from
    encodedInput = encodedInput.concat(this.addressToBytes20(this.args[1]));
    // assetId
    encodedInput = encodedInput.concat(this.numberToBytes2(this.args[2]));
    // enableAsColl
    encodedInput = encodedInput.concat(this.boolToBytes1(this.args[3]));
    // useDefaultMarket
    encodedInput = encodedInput.concat(this.boolToBytes1(this.args[4]));
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

module.exports = AaveV3SupplyAction;
