const { getAssetInfo } = require('@defisaver/tokens');
const Action = require('../../Action');
const { requireAddress } = require('../../utils/general');
const { getAddr } = require('../../addresses');

/**
 * LiquityStakeAction - Stakes LQTY tokens
 */
class LiquityStakeAction extends Action {
    /**
     * @param lqtyAmount Amount of LQTY tokens that will be staked
     * @param from Address where the tokens are being pulled from
     * @param wethTo Address that will receive ETH gains
     * @param lusdTo Address that will receive LUSD gains
     */
    constructor(lqtyAmount, from, wethTo, lusdTo) {
        requireAddress(from);
        requireAddress(wethTo);
        requireAddress(lusdTo);
        super('LiquityStake',
            getAddr('LiquityStake'),
            [['uint256', 'address', 'address', 'address']],
            [[...arguments]]);

        this.mappableArgs = [
            this.args[0][0],
            this.args[0][1],
            this.args[0][2],
            this.args[0][3],
        ];
    }

    async getAssetsToApprove() {
        return [{ asset: getAssetInfo('LQTY').address, owner: this.args[0][1], protocol: 'liquity'}];
    }
}

module.exports = LiquityStakeAction;
