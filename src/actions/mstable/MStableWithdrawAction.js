const Action = require("@defisaver/sdk/src/Action");
const {requireAddress} = require("@defisaver/sdk/src/utils/general");
const { getAddr } = require('@defisaver/sdk/src/addresses');

/**
 * MStableWithdrawAction
 */
class MStableWithdrawAction extends Action {
    /**
     * @param bAsset
     * @param mAsset
     * @param saveAddress
     * @param vaultAddress
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
        to,
        amount,
        minOut,
        stake,
    ) {
        requireAddress(bAsset);
        requireAddress(mAsset);
        requireAddress(saveAddress);
        requireAddress(vaultAddress);
        requireAddress(to);

        super(
            'MStableWithdraw',
            getAddr('MStableWithdraw'),
            [['address', 'address', 'address', 'address', 'address', 'uint256', 'uint256', 'bool']],
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
        ];
    }
}

module.exports = MStableWithdrawAction;
