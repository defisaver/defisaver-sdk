const Action = require("../../Action");
const { getAddr } = require('../../addresses.js');

/**
 * MakerOpenVaultAction
 */
class MakerOpenVaultAction extends Action {
  /**
   * @param joinAddr {EthAddress}
   * @param mcdManager {EthAddress}
   */
  constructor(joinAddr, mcdManager = getAddr('McdCdpManager')) {
    super('McdOpen', getAddr('McdOpen'), ['address','address'], [joinAddr, mcdManager]);
  }
}

module.exports = MakerOpenVaultAction;
