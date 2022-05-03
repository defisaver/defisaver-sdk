const Action = require("../../Action");
const { requireAddress } = require("../../utils/general");

/**
 * ConvexClaimAction - Claims convex rewards
 */
class ConvexClaimAction extends Action {
    /**
     * @param {address} from 
     * @param {address} to 
     * @param {address} rewardContract 
     */
    constructor(
        from,
        to,
        rewardContract,
    ) {
        requireAddress(to);
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