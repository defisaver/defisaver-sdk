const Action = require('../../Action');
const { requireAddress } = require('../../utils/general');
const { getAddr } = require('../../addresses');

/**
 * LiquityClaimAction - Claims collateral from the closed trove
 */
class LiquityClaimAction extends Action {
    /**
   * @param to Address that will receive the collateral
   */
    constructor(to) {
        requireAddress(to);
        super('LiquityClaim',
            getAddr('LiquityClaim'),
            [['address']],
            [[...arguments]]);

            this.mappableArgs = [
                this.args[0][0],
              ];
    }
}

module.exports = LiquityClaimAction;
