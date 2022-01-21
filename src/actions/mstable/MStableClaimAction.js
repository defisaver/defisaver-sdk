const Action = require('../../Action');
const { requireAddress } = require('../../utils/general');
const { getAddr } = require('../../addresses.js');

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
            'MStableClaim',
            getAddr('MStableClaim'),
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
