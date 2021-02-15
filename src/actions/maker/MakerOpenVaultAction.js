const Action = require("../../Action");
const { getAddr } = require('../../addresses.js');

/**
 * MakerOpenVaultAction
 */
class MakerOpenVaultAction extends Action {
  /**
   * @param joinAddr {Address}
   * @param mcdManager {Address}
   */
  constructor(joinAddr, mcdManager= getAddr('McdCdpManager')) {
    super('McdOpen', getAddr('McdOpen'), ['address','address'], [joinAddr, mcdManager]);
  }
}

module.exports = MakerOpenVaultAction;
