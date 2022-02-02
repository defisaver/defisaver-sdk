const { getAssetInfo } = require('@defisaver/tokens');
const Action = require('../../Action');
const { requireAddress } = require('../../utils/general');
const { getAddr } = require('../../addresses');

class CurveClaimFeesAction extends Action {

    /**
     *
     * @param {EthAddress} claimFor
     * @param {EthAddress} receiver
     */
    constructor(
        claimFor,
        receiver,
    ) {
        requireAddress(claimFor);
        requireAddress(receiver);
        super('CurveClaimFeesAction',
            getAddr('CurveClaimFeesAction'),
            [['address', 'address']],
            [[...arguments]]);

        this.mappableArgs = [
            this.args[0][0],
            this.args[0][1],
        ];
    }
}

module.exports = CurveClaimFeesAction;
