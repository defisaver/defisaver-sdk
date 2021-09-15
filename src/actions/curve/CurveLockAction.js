const Action = require('@defisaver/sdk/src/Action');
const { requireAddress } = require('@defisaver/sdk/src/utils/general');
const { getAddr } = require('@defisaver/sdk/src/addresses');

class CurveLockAction extends Action {
    
    constructor(sender, operation, amount, unlockTime) {
        requireAddress(sender);
        super('CurveLock',
            getAddr('CurveLock'),
            [['address', 'uint256', 'uint256', 'uint256']],
            [[...arguments]],
        );

        this.mappableArgs = [
            this.args[0][0],
            this.args[0][2],
            this.args[0][3],
        ];
    }

    async getAssetsToApprove() {
        return { asset: getAddr('CrvToken'), owner: this.args[0][0] };
    }
}

module.exports = CurveLockAction;
