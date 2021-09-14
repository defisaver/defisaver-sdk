const { getAssetInfo } = require('@defisaver/tokens');
const Action = require('@defisaver/sdk/src/Action');
const { requireAddress } = require('@defisaver/sdk/src/utils/general');
const { getAddr } = require('@defisaver/sdk/src/addresses');

class CurveWithdrawAction extends Action {
    
    constructor(
        sender,
        receiver,
        pool,
        lpToken,
        sig,
        burnAmount,
        minAmounts = [],
        tokens = [],
        useUnderlying
    ) {
        requireAddress(sender);
        requireAddress(receiver);
        super('CurveWithdrawAction',
            getAddr('CurveWithdrawAction'),
            [['address', 'address', 'address', 'address', 'bytes4', 'uint256', 'uint256[]', 'address[], bool']],
            [[...arguments]]);

        this.mappableArgs = [
            this.args[0][0],
            this.args[0][1],
            this.args[0][2],
            this.args[0][3],
            this.args[0][5],
            ...this.args[0][6],
            ...this.args[0][7],
        ];
    }

    async getAssetsToApprove() {
        return { asset: this.args[0][3], owner: this.args[0][0] };
    }
}

module.exports = CurveWithdrawAction;
