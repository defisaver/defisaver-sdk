const L2Action = require("../../L2Action");
const {getAssetInfoByAddress} = require("@defisaver/tokens");
const { getAddr } = require('../../addresses.js');

/**
 * AaveV3ATokenPaybackAction - Repay Aave V3 debt using aTokens
 */
class AaveV3ATokenPaybackAction extends L2Action {
  /**
   * @param market {EthAddress}
   * @param amount {string}
   * @param from {EthAddress} 
   * @param rateMode 
   * @param assetId {EthAddress}
   */
  constructor(market, amount, from, rateMode, aTokenAddr, assetId) {
    super('AaveV3Payback', getAddr('AaveV3Payback'), 
    [['address','uint256','address','uint8','uint16']],
    [[market, amount, from, rateMode, assetId]]
    );

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
      this.args[0][2],
    ];
    this.addressForApproval = aTokenAddr;
  }

  async getAssetsToApprove() {
    const asset = getAssetInfoByAddress(this.addressForApproval);
    if (asset.symbol !== 'ETH') return [{asset: this.addressForApproval, owner: this.args[0][2]}];
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
    return encodedInput;
  }
}

module.exports = AaveV3ATokenPaybackAction;
