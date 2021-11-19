const Action = require("@defisaver/sdk/src/Action");
const { getAddr } = require('@defisaver/sdk/src/addresses');

/**
 * MakerUnwindGUniAction
 */
class MakerUnwindGUniAction extends Action {
  /**
   * @param daiAmount {min amount of dai to receive back from unwinding}
   * @param mcdManager {EthAddress}
   * @param vaultId {VaultId}
   * @param mcdManager {EthAddress}
   * @param sendDaiTo {Address to which to send all received dai}
   */
  constructor(daiAmount, mcdManager, vaultId, guniLevAddr, sendDaiTo) {
    super('McdUnwindGUni', getAddr('McdUnwindGUni'), [['uint256', 'address', 'uint256', 'address', 'address']], [[daiAmount, mcdManager, vaultId, guniLevAddr, sendDaiTo]] );
  }
}

module.exports = MakerUnwindGUniAction;
