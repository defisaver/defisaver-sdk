const Action = require("../../Action");
const {requireAddress} = require("../../utils/general");

const { getAddr } = require('../../addresses.js');

/**
 * MakerGiveAction - gives a vault to a selected address
 */
class MakerGiveAction extends Action {
  /**
   * @param vaultId {VaultId}
   * @param newOwner {EthAddress}
   * @param createProxy {boolean}
   * @param mcdManager {EthAddress}
   */
  constructor(vaultId, newOwner, createProxy, mcdManager= getAddr('McdCdpManager')) {
    requireAddress(newOwner);
    super('McdGive', getAddr('McdGive'), [["uint256", "address", "bool", "address"]], [[vaultId, newOwner, createProxy, mcdManager]]);

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
    ];
  }
}

module.exports = MakerGiveAction;
