const Action = require('../../Action');
const { getAddr } = require('../../addresses');
const { getConvexPool } = require('../../utils/convex-utils');
const { requireAddress } = require('../../utils/general');

/**
 * ConvexClaimAction - Claims convex rewards
 */
class ConvexClaimAction extends Action {
    /**
     * @param {address} from 
     * @param {address} to 
     * @param {address} curveLp 
     */
    constructor(
        from,
        to,
        curveLp,
    ) {
        requireAddress(to);
        const { crvRewards } = getConvexPool(curveLp);
        super(
            'ConvexClaim',
            getAddr('ConvexClaim'),
            [
                'address',
                'address',
                'address',
            ],
            [
                from,
                to,
                crvRewards,
            ],
        ).curveLp = curveLp;

        this.mappableArgs = [
            this.args[0],
            this.args[1],
            this.args[2],
        ];
    }

    async getAssetsToApprove() {
        const pool = getConvexPool(this.curveLp);
        const owner = this.args[0];

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

module.exports = ConvexClaimAction;