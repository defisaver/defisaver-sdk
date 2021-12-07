const Action = require("@defisaver/sdk/src/Action");
const {requireAddress} = require("@defisaver/sdk/src/utils/general");
const { getAddr } = require('@defisaver/sdk/src/addresses');

/**
 * MStableClaimAction
 */
class MStableClaimAction extends Action {
    /**
     * @param vaultAddress
     * @param to
     * @param first
     * @param last
     */
    constructor(
        vaultAddress,
        to,
        first,
        last,
    ) {
        requireAddress(vaultAddress);
        requireAddress(to);

        super(
            'MStableSave',
            getAddr('MStableSave'),
            [['address', 'address', 'uint256', 'uint256']],
            [[...arguments]],
        );

        this.mappableArgs = [
            this.args[0][0],
            this.args[0][1],
        ];
    }
}

module.exports = MStableClaimAction;
