const ActionWithL2 = require("../../ActionWithL2");
const { getAddr } = require('../../addresses.js');

/**
 * QiDaoSupplyAction - supply collateral to a QiDao vault
 */
class QiDaoSupplyAction extends ActionWithL2 {
  /**
   * @param vaultId {number} ID of the QiDao vault contract in QiDaoRegistry
   * @param userVaultId {string} ID of the users vault
   * @param amount {string} amount of tokens to be supplied as collateral
   * @param from {EthAddress} address from which to pull tokens
   * @param tokenAddress {EthAddress} address of the collateral token
   */
  constructor(vaultId, userVaultId, amount, from, tokenAddress) {
    super('QiDaoSupply',
    '0', //TODO :  getAddr('QiDaoSupply')
    [['uint16','uint256','uint256','address']],
    [[vaultId, userVaultId, amount, from]],
    );

    this.tokenForApproval = tokenAddress;

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
    // from
    encodedInput = encodedInput.concat(this.addressToBytes20(this.args[0][3]));
    return encodedInput;
  }
  
  async getAssetsToApprove() {
    const asset = getAssetInfoByAddress(this.tokenForApproval);
    if (asset.symbol !== 'ETH') return [{asset: this.tokenForApproval, owner: this.args[0][3]}];
    return [];
  }
}

module.exports = QiDaoSupplyAction;
