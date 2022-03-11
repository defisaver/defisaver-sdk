const Action = require('../../Action');
const { requireAddress } = require('../../utils/general');
const { getAddr } = require('../../addresses.js');

/**
 * CurveStethPoolDepositAction - Deposits tokens into curve steth pool
 */
class CurveStethPoolDepositAction extends Action {
    /**
     * @param from {address}
     * @param to {address}
     * @param amounts {uint256[2]}
     * @param minMintAmount {uint256}
     */
    constructor(
        from,
        to,
        amounts,
        minMintAmount,
    ) {
        requireAddress(to);

        super(
            'CurveStethPoolDeposit',
            getAddr('CurveStethPoolDeposit'),
            [['address', 'address', 'uint256[2]', 'uint256']],
            [[...arguments]],
        );

        this.mappableArgs = [
            this.args[0][0],
            this.args[0][1],
            this.args[0][2][0],
            this.args[0][2][1],
            this.args[0][3],
        ];
    }
}

module.exports = CurveStethPoolDepositAction;
