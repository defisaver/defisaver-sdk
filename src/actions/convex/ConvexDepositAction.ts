import Action from '../../Action';
import { getAddr } from '../../addresses';
import { DepositOption, getConvexPool } from '../../utils/convex-utils';
import { requireAddress } from '../../utils/general';
import {EthAddress,uint256,uint8} from '../../types';
/**
 * ConvexDepositAction - Deposits (wraps) Curve LP into convex, stakes wrapped LP, or does both
 * 
 * @category Convex
 */
export class ConvexDepositAction extends Action {

    curveLp:EthAddress;

    /**
     * @param {address} from 
     * @param {address} to 
     * @param {address} curveLp 
     * @param {uint256} amount 
     * @param {uint8} option 
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