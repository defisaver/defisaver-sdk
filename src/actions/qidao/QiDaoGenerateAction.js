const ActionWithL2 = require("../../ActionWithL2");
const { getAddr } = require('../../addresses.js');

/**
 * QiDaoGenerateAction - generate MAI debt for a QiDao vault
 */
class QiDaoGenerateAction extends ActionWithL2 {
  /**
   * @param vaultId {number} ID of the QiDao vault contract in QiDaoRegistry
   * @param userVaultId {string} ID of the users vault
   * @param amount {string} amount of MAI to be generated
   * @param to {EthAddress} address to receive MAI
   */
  constructor(vaultId, userVaultId, amount, to) {
    super('QiDaoGenerate',
    '0', //TODO :  getAddr('QiDaoGenerate')
    [['uint16','uint256','uint256','address']],
    [[vaultId, userVaultId, amount, to]]
    );

    this.mappableArgs = [
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
    encodedInput = encodedInput.concat(this.numberToBytes32(this.args[0][1]));
    // amount
    encodedInput = encodedInput.concat(this.numberToBytes32(this.args[0][2]));
    // to
    encodedInput = encodedInput.concat(this.addressToBytes20(this.args[0][3]));
    return encodedInput;
  }
}

module.exports = QiDaoGenerateAction;
