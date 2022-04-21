const Action = require("../../Action");

class ConvexClaimAction extends Action {
    constructor(
        from,
        to,
        rewardContract,
    ) {
        super(
            'ConvexClaim',
            '0x',
            [[
                'address',
                'address',
                'address',
            ]],
            [[...arguments]],
        );
    }
}

module.exports = ConvexClaimAction;