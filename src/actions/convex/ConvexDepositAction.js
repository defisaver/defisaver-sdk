const Action = require('../../Action');
const { DepositOption, getConvexPool } = require('../../utils/convex-utils');
const { requireAddress } = require('../../utils/general');
/**
 * ConvexDepositAction - Deposits (wraps) Curve LP into convex, stakes wrapped LP, or does both
 */
class ConvexDepositAction extends Action {
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
            'ConvexDeposit',
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
        const assetToPull = {
            [DepositOption.WRAP]: pool.lpToken,
            [DepositOption.STAKE]: pool.token,
            [DepositOption.WRAP_AND_STAKE]: pool.lpToken,
        }

        return [{
            asset: assetToPull[this.args[0][4]], owner: this.args[0][0],
        }];
    }
}

module.exports = ConvexDepositAction;