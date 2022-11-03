import {Action}  from '../../Action';
import { getAddr } from '../../addresses';
import { getConvexPool } from '../../utils/convex-utils';
import { requireAddress } from '../../utils/general';
import {EthAddress} from '../../types';

/**
 * ConvexClaimAction - Claims convex rewards
 * 
 * @category Convex
 */
export class ConvexClaimAction extends Action {

    curveLp:EthAddress;

    /**
     * @param from 
     * @param to 
     * @param curveLp 
     */
    constructor(
        from:EthAddress,
        to:EthAddress,
        curveLp:EthAddress,
    ) {
        requireAddress(to);
        const convexPool = getConvexPool(curveLp)!;
        const crvRewards  :string = convexPool.crvRewards;
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
        )
        
        this.curveLp = curveLp;

        this.mappableArgs = [
            this.args[0],
            this.args[1],
            this.args[2],
        ];
    }

    async getAssetsToApprove() {
        const pool = getConvexPool(this.curveLp)!;
        const owner = this.args[0];

        return [
            getAddr('CrvToken'),
            getAddr('CvxToken'),
        ].concat(
            pool.extraRewards.map((e:any) => e.token),
        ).reduce((acc: any, e:string) => {
            if (!acc.includes(e.toLowerCase())) acc.push(e.toLowerCase());
            return acc;
        }, []).map((e:any) => Object({asset: e, owner}));
    }
}