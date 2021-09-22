const { getAssetInfo } = require('@defisaver/tokens');
const Action = require('@defisaver/sdk/src/Action');
const { requireAddress } = require('@defisaver/sdk/src/utils/general');
const { getAddr } = require('@defisaver/sdk/src/addresses');

class CurveClaimFeesAction extends Action {
    
    constructor(
        claimFor,
        receiver,
    ) {
        requireAddress(claimFor);
        requireAddress(receiver);
        super('CurveClaimFeesAction',
            getAddr('CurveClaimFeesAction'),
            [['address', 'address']],
            [[... arguments]]);

        this.mappableArgs = [
            this.args[0][0],
            this.args[0][1],
        ];
    }
}

module.exports = CurveClaimFeesAction;
