const { getAssetInfo } = require('@defisaver/tokens');
const Action = require('../../Action');
const { requireAddress } = require('../../utils/general');
const { getAddr } = require('../../addresses');

/**
 * LiquityRedeemAction - Redeems collateral from the liquity protocol
 */
class LiquityRedeemAction extends Action {
    /**
     * @param lusdAmount Amount of LUSD tokens to send
     * @param from Address where the tokens are pulled from
     * @param to Address that will receive redeemed collateral
     * @param maxFeePercentage Highest redemption fee to accept
      */
    constructor(
        lusdAmount,
        from,
        to,
        firstRedemptionHint,
        upperPartialRedemptionHint,
        lowerPartialRedemptionHint,
        partialRedemptionHintNICR,
        maxIterations,
        maxFeePercentage,
    ) {
        requireAddress(from);
        requireAddress(to);
        super('LiquityRedeem',
            getAddr('LiquityRedeem'),
            ['uint256', 'address', 'address', 'address', 'address', 'address', 'uint256', 'uint256', 'uint256'],
            [...arguments]);

        this.mappableArgs = [
            this.args[0],
            this.args[1],
            this.args[2],
            this.args[8],
        ];
    }

    async getAssetsToApprove() {
        return [{ asset: getAssetInfo('LUSD').address, owner: this.args[1]}];
    }
}

module.exports = LiquityRedeemAction;
