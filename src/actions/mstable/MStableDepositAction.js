const Action = require('../../Action');
const { requireAddress } = require('../../utils/general');
const { getAddr } = require('../../addresses');
const mstableAssetPairs = require('../../utils/mstableAssetPairs');

/**
 * MStableDepositAction
 */
class MStableDepositAction extends Action {
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
        bAsset,
        mAsset,
        saveAddress,
        vaultAddress,
        from,
        to,
        amount,
        minOut,
        assetPair,
    ) {
        requireAddress(bAsset);
        requireAddress(mAsset);
        requireAddress(saveAddress);
        requireAddress(vaultAddress);
        requireAddress(from);
        requireAddress(to);

        super(
            'MStableDeposit',
            getAddr('MStableDeposit'),
            ['address', 'address', 'address', 'address', 'address', 'address', 'uint256', 'uint256', 'uint256'],
            [...arguments],
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
        case mstableAssetPairs.BASSET_MASSET:
        case mstableAssetPairs.BASSET_IMASSET:
        case mstableAssetPairs.BASSET_IMASSETVAULT:
            asset = this.args[0];
            break;
        case mstableAssetPairs.MASSET_IMASSET:
        case mstableAssetPairs.MASSET_IMASSETVAULT:
            asset = this.args[1];
            break;
        case mstableAssetPairs.IMASSET_IMASSETVAULT:
            asset = this.args[2];
            break;
        default:
            return [];
        }
        return [{ asset, owner }];
    }
}

module.exports = MStableDepositAction;
