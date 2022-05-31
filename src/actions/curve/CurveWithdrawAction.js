const { getAssetInfo } = require('@defisaver/tokens');
const Action = require('../../Action');
const { requireAddress } = require('../../utils/general');
const { getAddr } = require('../../addresses');
const { poolInfo, makeFlags } = require('../../utils/curve-utils');

class CurveWithdrawAction extends Action {

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
        sender,
        receiver,
        poolAddr,
        burnAmount,
        useUnderlying,
        withdrawExact,
        minAmounts = [],
    ) {
        requireAddress(sender);
        requireAddress(receiver);

        let depositTarget;
        let depositTargetType = 0;
        let explicitUnderlying = false;

        const pool = poolInfo.find((e) => e.swapAddr.toLowerCase() === poolAddr.toLowerCase());
        if (useUnderlying) {
            if (pool.depositContract) {
                depositTarget = pool.depositContract;
                depositTargetType = pool.zapType + 1;
            } else {
                depositTarget = pool.swapAddr;
                explicitUnderlying = pool.underlyingFlag;
                if (!explicitUnderlying) throw error('pool has no underlying deposit mechanism');
            }
        } else {
            depositTarget = pool.swapAddr;
        }

        super('CurveWithdrawAction',
            getAddr('CurveWithdrawAction'),
            ['address', 'address', 'address', 'uint256', 'uint8', 'uint256[]'],
            [
                sender,
                receiver,
                depositTarget,
                burnAmount,
                makeFlags(depositTargetType, explicitUnderlying, withdrawExact),
                minAmounts,
            ],
        ).lpToken = pool.lpToken;

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

module.exports = CurveWithdrawAction;
