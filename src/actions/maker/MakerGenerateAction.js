const Action = require("../../Action");
const {requireAddress} = require("../../utils/general");
const { getAddr } = require('../../addresses.js');

/**
 * MakerGenerateAction - Generated Dai from a Vault
 */
class MakerGenerateAction extends Action {
  /**
   * @param vaultId {VaultId}
   * @param amount {string} Amount of DAI to generate in wei
   * @param to {EthAddress} Generated DAI will be sent to this address
   * @param mcdManager {EthAddress}
   */
  constructor(vaultId, amount, to, mcdManager = getAddr('McdCdpManager')) {
    requireAddress(to);
    super('McdGenerate', getAddr('McdGenerate'), [['uint256','uint256','address','address']], [[vaultId, amount, to, mcdManager]]);
  }
}

module.exports = MakerGenerateAction;
