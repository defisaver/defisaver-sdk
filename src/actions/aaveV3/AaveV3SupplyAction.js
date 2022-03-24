const L2Action = require("../../L2Action");
const {getAssetInfoByAddress} = require("@defisaver/tokens");
const { getAddr } = require('../../addresses.js');

/**
 * AaveV3SupplyAction - Supply token to an aave position on Aave V3
 */
class AaveV3SupplyAction extends L2Action {
  
  /**
   * @param market {EthAddress}
   * @param amount {string}
   * @param from {EthAddress} Tokens will be supplied from this address
   * @param tokenAddress
   * @param assetId
   * @param enableAsColl {boolean} If we need to enable asset as collateral
   * @param useOnBehalf {boolean} 
   * @param onBehalf {EthAddress} Tokens will be supplied to this address' position (defaults to sender's proxy)
   */
  constructor(market, amount, from, tokenAddress, assetId, enableAsColl, useOnBehalf , onBehalf = getAddr('Empty')) {
    super('AaveV3Supply', getAddr('AaveV3Supply'), 
    [['address','uint256','address','uint16','bool','bool', 'address']],
    [[market, amount, from, assetId, enableAsColl, useOnBehalf, onBehalf]]
    );

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
      this.args[0][2],
      this.args[0][6],
    ];
    this.tokenForApproval = tokenAddress;
  }

  async getAssetsToApprove() {
    const asset = getAssetInfoByAddress(this.tokenForApproval);
    if (asset.symbol !== 'ETH') return [{asset: this.tokenForApproval, owner: this.args[0][2]}];
    return [];
  }
  
  encodeInputs() {
    // executeActionDirectL2
    let encodedInput = "0x2895f3aa";
    // market
    encodedInput = encodedInput.concat(this.addressToBytes20(this.args[0][0]));
    // assetId
    encodedInput = encodedInput.concat(this.numberToBytes2(this.args[0][3]));
    // amount
    encodedInput = encodedInput.concat(this.numberToBytes32(this.args[0][1]));
    // from
    encodedInput = encodedInput.concat(this.addressToBytes20(this.args[0][2]));
    // enableAsColl
    encodedInput = encodedInput.concat(this.boolToBytes1(this.args[0][4]));
    // useOnBehalf
    encodedInput = encodedInput.concat(this.boolToBytes1(this.args[0][5]));
    if (this.args[0][5]) {
      // onBehalf
      encodedInput = encodedInput.concat(this.addressToBytes20(this.args[0][6]));
    }
    return encodedInput;
  }
}

module.exports = AaveV3SupplyAction;
