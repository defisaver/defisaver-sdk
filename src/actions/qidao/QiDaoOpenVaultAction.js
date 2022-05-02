const ActionWithL2 = require("../../ActionWithL2");
const { getAddr } = require('../../addresses.js');

/**
 * QiDaoOpenVaultAction - open a QiDao vault
 */
class QiDaoOpenVaultAction extends ActionWithL2 {
  /**
   * @param vaultId {number} ID of the QiDao vault contract in QiDaoRegistry
   */
  constructor(vaultId) {
    super('QiDaoOpen', '0', //TODO :  getAddr('QiDaoOpen')
      [['uint16']], [[vaultId]]);
  }

  encodeInputs() {
    // executeActionDirectL2
    let encodedInput = "0x2895f3aa";
    // vaultId
    encodedInput = encodedInput.concat(this.numberToBytes2(this.args[0][0]));
    return encodedInput;
  }
}

module.exports = QiDaoOpenVaultAction;
