const { getAssetInfo } = require('@defisaver/tokens');
const Action = require('../../Action');
const { requireAddress } = require('../../utils/general');
const { getAddr } = require('../../addresses');
const { poolInfo, makeFlags } = require('../../utils/curve-utils');

class CurveDepositAction extends Action {

    /**
     * @param {EthAddress} sender
     * @param {EthAddress} receiver
     * @param {EthAddress} poolAddr
     * @param {string} minMintAmount
     * @param {bool} useUnderlying
     * @param {Array<string>} amounts
     */
    constructor(
        sender,
        receiver,
        poolAddr,
        minMintAmount,
        useUnderlying,
        amounts = [],
    ) {
        requireAddress(sender);
        requireAddress(receiver);

        let depositTarget;
        let depositTargetType = 0;
        let explicitUnderlying = false;
        let tokensForApproval;

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
        ).tokensForApproval = tokensForApproval;

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

module.exports = CurveDepositAction;
