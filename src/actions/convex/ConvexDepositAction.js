const Action = require("../../Action");

/**
 * ConvexDepositAction - Deposits (wraps) Curve LP into convex, stakes wrapped LP, or does both
 */
class ConvexDepositAction extends Action {
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