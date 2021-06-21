const Action = require("../../Action");
const { getAddr } = require('../../addresses.js');

/**
 * AaveMigrateLendAction - Migrates Lend to Aave
 */
class AaveMigrateLendAction extends Action {
  /**
   * @param lendAmount {string}
   * @param from {EthAddress}
   * @param to {EthAddress}
   */
  constructor(lendAmount, from, to) {
    super('AaveMigrateLend', getAddr('AaveMigrateLend'), [["uint256", "address", "address"]], [[...arguments]]);
  }
}

module.exports = AaveMigrateLendAction;
