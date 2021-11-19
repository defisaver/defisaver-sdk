const Action = require("@defisaver/sdk/src/Action");
const { getAddr } = require('@defisaver/sdk/src/addresses');

/**
 * MakerWindGUniAction
 */
class MakerWindGUniAction extends Action {
  /**
   * @param daiAmount {dai amount to pull to proxy}
   * @param from {address from which to pull dai from}
   * @param principal {dai amount to use as principal for leverage}
   * @param minWalletDai {amount of usdc+dai you want to get back to wallet after this action}
   * @param vaultId {VaultId, 0 if there isn't already opened GUNI vault, to create one}
   * @param mcdManager {EthAddress}
   * @param joinAddr {EthAddress}
   * @param guniLevAddr {EthAddress}
   */
  constructor(daiAmount, from, principal, minWalletDai, vaultId, mcdManager, joinAddr, guniLevAddr) {
    super('McdWindGUni', getAddr('McdWindGUni'), [['uint256','address', 'uint256', 'uint256', 'uint256', 'address', 'address', 'address']], [[daiAmount, from, principal, minWalletDai, vaultId, mcdManager, joinAddr, guniLevAddr]] );
  }
  async getAssetsToApprove() {
    return [{asset: getAssetInfo('DAI').address, owner: this.args[0][1]}];
  }
}

module.exports = MakerWindGUniAction;
