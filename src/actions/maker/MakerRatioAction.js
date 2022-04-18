const Action = require("../../Action");
const { getAddr } = require('../../addresses.js');

/**
 * MakerRatioAction
 */
class MakerRatioAction extends Action {
  /**
   * @param vaultId {uint256}
   */
  constructor(vaultId) {
    super('McdRatio', getAddr('McdRatio'), ['uint256'], [vaultId]);
  }
}

module.exports = MakerRatioAction;
