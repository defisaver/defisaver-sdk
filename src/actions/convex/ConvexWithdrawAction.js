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
            '0x',
            [[
                'address',
                'address',
                'uint256',
                'uint256',
                'uint8',
            ]],
            [[
                from,
                to,
                pid,
                amount,
                option,
            ]],
        ).curveLp = curveLp;
    }

    async getAssetsToApprove() {
        const pool = getConvexPool(this.curveLp);
        const owner = this.args[0][0];

        if (this.args[0][4] === WithdrawOption.UNWRAP) {
            return [{asset: pool.token, owner}];
        }

        return [
            getAddr('CrvToken'),
            getAddr('CvxToken'),
        ].concat(
            pool.extraRewards.map((e) => e.token),
        ).reduce((acc, e) => {
            if (!acc.includes(e.toLowerCase())) acc.push(e.toLowerCase());
            return acc;
        }, []).map((e) => Object({asset: e, owner}));
    }
}

module.exports = ConvexWithdrawAction;