const Action = require('../../Action');
const { getAddr } = require('../../addresses');
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
            getAddr('ConvexDeposit'),
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
        const assetToPull = {
            [DepositOption.WRAP]: pool.lpToken,
            [DepositOption.STAKE]: pool.token,
            [DepositOption.WRAP_AND_STAKE]: pool.lpToken,
        }

        return [{
            asset: assetToPull[this.args[4]], owner: this.args[0],
        }];
    }
}

module.exports = ConvexDepositAction;