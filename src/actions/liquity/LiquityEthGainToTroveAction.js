const Action = require('../../Action');
const { requireAddress } = require('../../utils/general');
const { getAddr } = require('../../addresses');
/**
 * LiquityEthGainToTroveAction - Withdraws earned ETH gains to the users Trove
 */
class LiquityEthGainToTroveAction extends Action {
    /**
     * @param lqtyTo Address that will receive LQTY gains
     */
    constructor(lqtyTo, upperHint, lowerHint) {
        requireAddress(lqtyTo);
        super('LiquityEthGainToTrove',
            getAddr('LiquityEthGainToTrove'),
            [['address', 'address', 'address']],
            [[...arguments]]);

        this.mappableArgs = [
            this.args[0][0],
        ];
    }
}

module.exports = LiquityEthGainToTroveAction;
