import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import mstableAssetPairs from '../../utils/mstableAssetPairs';
import { EthAddress, uint256 } from '../../types';

/**
 * MStableWithdrawAction
 *
 * @category MStable
 */
export class MStableWithdrawAction extends Action {
  /**
     * @param bAsset
     * @param mAsset
     * @param saveAddress
     * @param vaultAddress
     * @param from
     * @param to
     * @param amount
     * @param minOut
     * @param assetPair
     */
  constructor(
    bAsset:EthAddress,
    mAsset:EthAddress,
    saveAddress:EthAddress,
    vaultAddress:EthAddress,
    from:EthAddress,
    to:EthAddress,
    amount:uint256,
    minOut:uint256,
    assetPair:uint256,
  ) {
    requireAddress(bAsset);
    requireAddress(mAsset);
    requireAddress(saveAddress);
    requireAddress(vaultAddress);
    requireAddress(from);
    requireAddress(to);

    super(
      'MStableWithdraw',
      getAddr('MStableWithdraw'),
      ['address', 'address', 'address', 'address', 'address', 'address', 'uint256', 'uint256', 'uint256'],
      [bAsset, mAsset, saveAddress, vaultAddress, from, to, amount, minOut, assetPair],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
      this.args[4],
      this.args[5],
      this.args[6],
      this.args[7],
      this.args[8],
    ];
  }

  async getAssetsToApprove() {
    const assetPair = this.args[8];
    const owner = this.args[4];
    let asset;
    switch (assetPair) {
      case mstableAssetPairs.BASSET_IMASSETVAULT:
      case mstableAssetPairs.MASSET_IMASSETVAULT:
      case mstableAssetPairs.IMASSET_IMASSETVAULT:
        return [];
      case mstableAssetPairs.MASSET_IMASSET:
      case mstableAssetPairs.BASSET_IMASSET:
        asset = this.args[2];
        break;
      case mstableAssetPairs.BASSET_MASSET:
        asset = this.args[1];
        break;
      default:
        return [];
    }
    return [{ asset, owner }];
  }
}