import { getAssetInfo } from '@defisaver/tokens';
import Action from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import {EthAddress,uint256} from '../../types';

/**
 * LiquityRedeemAction - Redeems collateral from the liquity protocol
 */
export default class LiquityRedeemAction extends Action {
    /**
     * @param lusdAmount Amount of LUSD tokens to send
     * @param from Address where the tokens are pulled from
     * @param to Address that will receive redeemed collateral
     * @param maxFeePercentage Highest redemption fee to accept
      */
    constructor(
        lusdAmount:uint256,
        from:EthAddress,
        to:EthAddress,
        firstRedemptionHint:EthAddress,
        upperPartialRedemptionHint:EthAddress,
        lowerPartialRedemptionHint:EthAddress,
        partialRedemptionHintNICR:uint256,
        maxIterations:uint256,
        maxFeePercentage:uint256,
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