const ActionWithL2 = require("../../ActionWithL2");
const { getAddr } = require('../../addresses.js');

/**
 * QiDaoPaybackAction - payback MAI debt for a vault
 */
class QiDaoPaybackAction extends ActionWithL2 {
  /**
   * @param vaultId {number} ID of the QiDao vault contract in QiDaoRegistry
   * @param userVaultId {string} ID of the users vault
   * @param amount {string} amount of MAI to be paid back
   * @param from {EthAddress} address from which to pull MAI
   */
  constructor(vaultId, userVaultId, amount, from) {
    super(
    'QiDaoPayback',
    '0', //TODO :  getAddr('QiDaoPayback')
    [['uint16','uint32','uint128','address']],
    [[vaultId, userVaultId, amount, from]],
    );

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
      this.args[0][2],
      this.args[0][3],
    ];
  }

  encodeInputs() {
    // executeActionDirectL2
    let encodedInput = "0x2895f3aa";
    // vaultId
    encodedInput = encodedInput.concat(this.numberToBytes2(this.args[0][0]));
    // userVaultId
    encodedInput = encodedInput.concat(this.numberToBytes4(this.args[0][1]));
    // amount
    encodedInput = encodedInput.concat(this.numberToBytes16(this.args[0][2]));
    // from
    encodedInput = encodedInput.concat(this.addressToBytes20(this.args[0][3]));
    return encodedInput;
  }
  
  async getAssetsToApprove() {
    return [{asset: getAddr('MAI'), owner: this.args[0][3]}];
  }
}

module.exports = QiDaoPaybackAction;
