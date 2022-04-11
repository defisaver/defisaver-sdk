const ActionWithL2 = require("../../ActionWithL2");
const { getAddr } = require('../../addresses.js');

/**
 *  AaveV3ClaimRewardsAction
 */
class AaveV3ClaimRewardsAction extends ActionWithL2 {
    /**
   * @param assetsLength {number} Address provider for specific market
   * @param amount {string} length of two arrays
   * @param to {EthAddress}
   * @param reward {EthAddress}
   * @param assets {Array<EthAddress>}
   */
  constructor(assetsLength, amount, to, reward, assets) {
    super(
      'AaveV3ClaimRewards',
      getAddr('AaveV3ClaimRewards'),
      [['uint8', 'uint256', 'address', 'address', 'address[]']],
      [[assetsLength, amount, to, reward, assets]],
    );
  }
  encodeInputs() {
    // executeActionDirectL2
    let encodedInput = "0x2895f3aa";
    // assetsLength
    encodedInput = encodedInput.concat(this.numberToBytes1(this.args[0][0]));
    // amount
    encodedInput = encodedInput.concat(this.numberToBytes32(this.args[0][1]));
    // to
    encodedInput = encodedInput.concat(this.addressToBytes20(this.args[0][2]));
    // reward
    encodedInput = encodedInput.concat(this.addressToBytes20(this.args[0][3]));
    // assets
    const arrayLength = this.args[0][0];
    for (let i = 0; i < arrayLength; i++){
      // assets[i]
      encodedInput = encodedInput.concat(this.addressToBytes20(this.args[0][4][i]))
    }

    return encodedInput;
  }
}

module.exports = AaveV3ClaimRewardsAction;
