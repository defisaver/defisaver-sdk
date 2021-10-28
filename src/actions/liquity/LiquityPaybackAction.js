const { getAssetInfo } = require('@defisaver/tokens');
const Action = require('../../Action');
const { requireAddress } = require('../../utils/general');
const { getAddr } = require('../../addresses');

/**
 * LiquityPaybackAction - Repays LUSD to the trove
 */
class LiquityPaybackAction extends Action {
    /**
   * @param lusdAmount Amount of LUSD tokens to repay
   * @param from Address where the tokens are pulled from
   */
    constructor(lusdAmount, from, upperHint, lowerHint) {
        requireAddress(from);
        super('LiquityPayback',
            getAddr('LiquityPayback'),
            [['uint256', 'address', 'address', 'address']],
            [[...arguments]]);

        this.mappableArgs = [
            this.args[0][0],
            this.args[0][1],
        ];
    }

    async getAssetsToApprove() {
        return [{ asset: getAssetInfo('LUSD').address, owner: this.args[0][1]}];
    }
}

module.exports = LiquityPaybackAction;
