import {Action}  from '../../Action';
import { getAddr } from '../../addresses';
import { getConvexPool, WithdrawOption } from '../../utils/convex-utils';
import { requireAddress } from '../../utils/general';
import {EthAddress,uint256,uint8} from '../../types';
/**
 * ConvexWithdrawAction - Withdraws (unwraps) Curve LP from convex, unstakes wrapped LP, or does both
 * 
 * @category Convex
 */
export class ConvexWithdrawAction extends Action {

    curveLp:EthAddress;

    /**
     * @param from 
     * @param to 
     * @param curveLp 
     * @param amount 
     * @param option 
     */
    constructor(
        from:EthAddress,
        to:EthAddress,
        curveLp:EthAddress,
        amount:uint256,
        option:uint8,
    ) {
        requireAddress(to);
        const convexPool = getConvexPool(curveLp)!;
        const pid:number = convexPool.pid;
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
        );
        this.curveLp = curveLp;

        this.mappableArgs = [
            this.args[0],
            this.args[1],
            this.args[2],
            this.args[3],
            this.args[4],
        ];
    }

    async getAssetsToApprove() {
        const pool = getConvexPool(this.curveLp)!;
        const owner = this.args[0];

        if (this.args[4] === WithdrawOption.UNWRAP) {
            return [{asset: pool.token, owner}];
        }

        return [];
    }
}

module.exports = ConvexWithdrawAction;