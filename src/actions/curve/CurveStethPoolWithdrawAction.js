const Action = require('../../Action');
const { requireAddress } = require('../../utils/general');
const { getAddr } = require('../../addresses.js');

/**
 * CurveStethPoolWithdrawAction - Withdraws tokens from curve steth pool
 */
class CurveStethPoolWithdrawAction extends Action {
    /**
     * @param from {address}
     * @param to {address}
     * @param amounts {uint256[2]}
     * @param maxBurnAmount {uint256}
     */
    constructor(
        from,
        to,
        amounts,
        maxBurnAmount,
    ) {
        requireAddress(to);

        super(
            'CurveStethPoolWithdraw',
            getAddr('CurveStethPoolWithdraw'),
            ['address', 'address', 'uint256[2]', 'uint256'],
            [...arguments],
        );

        this.mappableArgs = [
            this.args[0],
            this.args[1],
            this.args[2][0],
            this.args[2][1],
            this.args[3],
        ];
    }
}

module.exports = CurveStethPoolWithdrawAction;
