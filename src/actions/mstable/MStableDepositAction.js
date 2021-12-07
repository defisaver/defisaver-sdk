const Action = require("@defisaver/sdk/src/Action");
const {requireAddress} = require("@defisaver/sdk/src/utils/general");
const { getAddr } = require('@defisaver/sdk/src/addresses');

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
        stake,
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
        return [{ asset: this.args[0], owner: this.args[0][4]}];
    }
}

module.exports = MStableDepositAction;
