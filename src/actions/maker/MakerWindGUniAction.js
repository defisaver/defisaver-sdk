const Action = require("@defisaver/sdk/src/Action");
const { getAddr } = require('@defisaver/sdk/src/addresses');

/**
 * MakerWindGUni
 */
class MakerWindGUniAction extends Action {
  /**
   */
  constructor(daiAmount, from, principal, minWalletDai, vaultId, mcdManager, joinAddr) {
    super('McdWindGUni', getAddr('McdWindGUni'), [['uint256','address', 'uint256', 'uint256', 'uint256', 'address', 'address']], [[daiAmount, from, principal, minWalletDai, vaultId, mcdManager, joinAddr]] );
  }
  async getAssetsToApprove() {
    return [{asset: getAssetInfo('DAI').address, owner: this.args[0][1]}];
  }
}

module.exports = MakerWindGUniAction;
