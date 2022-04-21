const Action = require("../../Action");

class ConvexDepositAction extends Action {
    constructor(
        from,
        to,
        poolId,
        amount,
        option,
    ) {
        super(
            'ConvexDeposit',
            '0x',
            [[
                'address',
                'address',
                'uint256',
                'uint256',
                'uint8',
            ]],
            [[...arguments]],
        );
    }
}

module.exports = ConvexDepositAction;