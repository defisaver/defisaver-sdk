import { getAssetInfo } from '@defisaver/tokens';
import Action from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import { poolInfo, makeFlags } from '../../utils/curve-utils';
import {EthAddress,uint256} from '../../types';


/**
 * @category Curve
 */
export class CurveWithdrawAction extends Action {

    lpToken:EthAddress;

    /**
     * @param {EthAddress} sender
     * @param {EthAddress} receiver
     * @param {EthAddress} poolAddr
     * @param {string} burnAmount
     * @param {boolean} useUnderlying
     * @param {boolean} withdrawExact
     * @param {Array<string>} minAmounts
     */
    constructor(
        sender:EthAddress,
        receiver:EthAddress,
        poolAddr:EthAddress,
        burnAmount:uint256,
        useUnderlying:boolean,
        withdrawExact:boolean,
        minAmounts:Array<uint256> = [],
    ) {
        requireAddress(sender);
        requireAddress(receiver);

        let depositTarget;
        let depositTargetType = 0;
        let explicitUnderlying = false;

        const pool = poolInfo.find((e:any) => e.swapAddr.toLowerCase() === poolAddr.toLowerCase())!;
        if (useUnderlying) {
            if (pool.depositContract) {
                depositTarget = pool.depositContract;
                depositTargetType = pool.zapType + 1;
            } else {
                depositTarget = pool.swapAddr;
                explicitUnderlying = pool.underlyingFlag!;
                if (!explicitUnderlying) throw Error('pool has no underlying deposit mechanism');
            }
        } else {
            depositTarget = pool.swapAddr;
        }

        super('CurveWithdraw',
            getAddr('CurveWithdraw'),
            ['address', 'address', 'address', 'uint256', 'uint8', 'uint256[]'],
            [
                sender,
                receiver,
                depositTarget,
                burnAmount,
                makeFlags(depositTargetType, explicitUnderlying, withdrawExact),
                minAmounts,
            ],
        );
        this.lpToken = pool.lpToken;

        this.mappableArgs = [
            this.args[0],
            this.args[1],
            this.args[2],
            this.args[3],
            this.args[4],
            ...this.args[5],
        ];
    }

    async getAssetsToApprove() {
        return [{ asset: this.lpToken, owner: this.args[0] }];
    }
}