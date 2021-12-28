const Action = require("../../Action");
const { getAddr } = require('../../addresses.js');

/**
 * MakerRatioAction
 */
class MakerRatioAction extends Action {
  /**
   * @param vaultId {uint256}
   * @param nextPrice {uint256}
   * @param mcdManager {EthAddress}
   */
  constructor(vaultId, nextPrice, mcdManager = getAddr('McdCdpManager')) {
    super('McdRatio', getAddr('McdRatio'), [['uint256','uint256','address']], [[vaultId, nextPrice, mcdManager]]);

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
      this.args[0][2],
    ];
  }
}

module.exports = MakerRatioAction;
