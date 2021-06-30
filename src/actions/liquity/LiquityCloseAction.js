const { getAssetInfo } = require('@defisaver/tokens');
const Action = require('../../Action');
const { requireAddress } = require('../../utils/general');
const { getAddr } = require('../../addresses');

/**
 * LiquityCloseAction - Closes trove
 */
class LiquityCloseAction extends Action {
    /**
   * @param from Address that will supply the LUSD needed to repay the debt
   * @param to Address that will receive the freed collateral
   */
    constructor(from, to) {
        requireAddress(from);
        requireAddress(to);
        super('LiquityClose',
            getAddr('LiquityClose'),
            [['address', 'address']],
            [[from, to]]);

            this.mappableArgs = [
                this.args[0][0],
                this.args[0][1],
              ];
    }

    async getAssetsToApprove() {
        return [{ asset: getAssetInfo('LUSD').address, owner: this.args[0] }];
    }
}

module.exports = LiquityCloseAction;
