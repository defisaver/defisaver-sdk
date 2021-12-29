const Action = require("../../Action");
const { getAddr } = require('../../addresses.js');

/**
 * MakerRatioAction
 */
class MakerRatioAction extends Action {
  /**
   * @param vaultId {uint256}
   * @param nextPrice {uint256}
   */
  constructor(vaultId, nextPrice) {
    super('McdRatio', getAddr('McdRatio'), [['uint256','uint256']], [[vaultId, nextPrice]]);

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
    ];
  }
}

module.exports = MakerRatioAction;
