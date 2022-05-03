const Action = require("../../Action");

/**
 * ConvexWithdrawAction - Withdraws (unwraps) Curve LP from convex, unstakes wrapped LP, or does both
 */
class ConvexWithdrawAction extends Action {
    /**
     * @param {address} from 
     * @param {address} to 
     * @param {uint256} poolId 
     * @param {uint256} amount 
     * @param {uint8} option 
     */
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