const Action = require("../../Action");

/**
 * AaveMigrateLendAction - Migrates Lend to Aave
 */
class AaveMigrateLendAction extends Action {
  /**
   * @param lendAmount {String}
   * @param from {String}
   * @param to {String}
   */
  constructor(lendAmount, from, to) {
    super('AaveMigrateLend', '0x0', ["uint256", "address", "address"], [...arguments]);
  }
}

module.exports = AaveMigrateLendAction;
