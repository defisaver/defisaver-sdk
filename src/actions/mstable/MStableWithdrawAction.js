const Action = require("../../Action");
const {requireAddress} = require("../../utils/general");
const { getAddr } = require('../../addresses.js');

/**
 * MStableWithdrawAction
 */
class MStableWithdrawAction extends Action {
    /**
     * @param bAsset
     * @param mAsset
     * @param saveAddress
     * @param vaultAddress
     * @param from
     * @param to
     * @param amount
     * @param minOut
     * @param stake
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
        unstake,
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
            [['address', 'address', 'address', 'address', 'address', 'address', 'uint256', 'uint256', 'bool']],
            [[...arguments]],
        );

        this.mappableArgs = [
            this.args[0][0],
            this.args[0][1],
            this.args[0][2],
            this.args[0][3],
            this.args[0][4],
            this.args[0][5],
            this.args[0][6],
            this.args[0][7],
            this.args[0][8],
        ];
    }

    async getAssetsToApprove() {
        const asset = this.args[2];
        const from = this.args[4];
        const unstake = this.args[8];
        return unstake ? [] : [{asset: getAssetInfo(asset).address, owner: from}]
      }
}

module.exports = MStableWithdrawAction;
