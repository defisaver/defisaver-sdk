const Action = require('../../Action');
const { getAddr } = require('../../addresses');
const { getConvexPool, WithdrawOption } = require('../../utils/convex-utils');
const { requireAddress } = require('../../utils/general');
/**
 * ConvexWithdrawAction - Withdraws (unwraps) Curve LP from convex, unstakes wrapped LP, or does both
 */
class ConvexWithdrawAction extends Action {
    /**
     * @param {address} from 
     * @param {address} to 
     * @param {address} curveLp 
     * @param {uint256} amount 
     * @param {uint8} option 
     */
    constructor(
        from,
        to,
        curveLp,
        amount,
        option,
    ) {
        requireAddress(to);
        const { pid } = getConvexPool(curveLp);
        super(
            'ConvexWithdraw',
            getAddr('ConvexWithdraw'),
            [
                'address',
                'address',
                'uint256',
                'uint256',
                'uint8',
            ],
            [
                from,
                to,
                pid,
                amount,
                option,
            ],
        ).curveLp = curveLp;

        this.mappableArgs = [
            this.args[0],
            this.args[1],
            this.args[2],
            this.args[3],
            this.args[4],
        ];
    }

    async getAssetsToApprove() {
        const pool = getConvexPool(this.curveLp);
        const owner = this.args[0];

        if (this.args[4] === WithdrawOption.UNWRAP) {
            return [{asset: pool.token, owner}];
        }

        return [];
    }
}

module.exports = ConvexWithdrawAction;