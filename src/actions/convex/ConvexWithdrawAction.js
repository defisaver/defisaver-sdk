const Action = require("../../Action");

class ConvexWithdrawAction extends Action {
    constructor(
        from,
        to,
        poolId,
        amount,
        option,
    ) {
        super(
            'ConvexWithdraw',
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

module.exports = ConvexWithdrawAction;