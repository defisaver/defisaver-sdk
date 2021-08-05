const { getAssetInfo } = require('@defisaver/tokens');
const Action = require('../../Action');
const { requireAddress } = require('../../utils/general');
const { getAddr } = require('../../addresses');

/**
 * LiquitySupplyAction - Supplies collateral to the trove
 */
class LiquitySupplyAction extends Action {
    /**
   * @param collAmount Amount of WETH tokens to supply
   * @param from Address where the tokens are pulled from
   */
    constructor(collAmount, from, upperHint, lowerHint) {
        requireAddress(from);
        super('LiquitySupply',
            getAddr('LiquitySupply'),
            [['uint256', 'address', 'address', 'address']],
            [[...arguments]]);

        this.mappableArgs = [
            this.args[0][0],
            this.args[0][1],
        ];
    }

    async getAssetsToApprove() {
        return [{ asset: getAssetInfo('WETH').address, owner: this.args[0][1], protocol: 'liquity'}];
    }
}

module.exports = LiquitySupplyAction;
