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
    */
    constructor(lqtyAmount, from) {
        requireAddress(from);
        super('LiquityStake',
            getAddr('LiquityStake'),
            ['uint256', 'address'],
            [...arguments]);
    }

    async getAssetsToApprove() {
        return [{ asset: getAssetInfo('LQTY').address, owner: this.args[1] }];
    }
}

module.exports = LiquityStakeAction;
