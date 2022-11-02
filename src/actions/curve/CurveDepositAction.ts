import { getAssetInfo } from '@defisaver/tokens';
import Action from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import { poolInfo, makeFlags } from '../../utils/curve-utils';
import {EthAddress,uint256} from '../../types';

export default class CurveDepositAction extends Action {

    tokensForApproval:Array<EthAddress>;

    /**
     * @param {EthAddress} sender
     * @param {EthAddress} receiver
     * @param {EthAddress} poolAddr
     * @param {string} minMintAmount
     * @param {bool} useUnderlying
     * @param {Array<string>} amounts
     */
    constructor(
        sender:EthAddress,
        receiver:EthAddress,
        poolAddr:EthAddress,
        minMintAmount:uint256,
        useUnderlying:boolean,
        amounts:Array<uint256> = [],
    ) {
        requireAddress(sender);
        requireAddress(receiver);

        let depositTarget;
        let depositTargetType = 0;
        let explicitUnderlying = false;
        let tokensForApproval;

        const pool = poolInfo.find((e) => e.swapAddr.toLowerCase() === poolAddr.toLowerCase())!;
        if (useUnderlying) {
            if (pool.depositContract) {
                depositTarget = pool.depositContract;
                depositTargetType = pool.zapType + 1;
            } else {
                depositTarget = pool.swapAddr;
                explicitUnderlying = pool.underlyingFlag!;
                if (!explicitUnderlying) throw Error('pool has no underlying deposit mechanism');
            }
            tokensForApproval = pool.underlyingCoins;
        } else {
            depositTarget = pool.swapAddr;
            tokensForApproval = pool.coins;
        }

        super('CurveDeposit',
            getAddr('CurveDeposit'),
            ['address', 'address', 'address', 'uint256', 'uint8', 'uint256[]'],
            [
                sender,
                receiver,
                depositTarget,
                minMintAmount,
                makeFlags(depositTargetType, explicitUnderlying, 0),
                amounts,
            ],
        );
        this.tokensForApproval = tokensForApproval;

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
        return this.tokensForApproval.map((e) => Object({
            asset: e.toLowerCase() !== getAssetInfo('ETH').address.toLowerCase() ? e : getAssetInfo('WETH').address,
            owner: this.args[0],
        }));
    }
}