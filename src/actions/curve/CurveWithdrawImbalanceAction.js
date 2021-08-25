const { getAssetInfo } = require('@defisaver/tokens');
const Action = require('@defisaver/sdk/src/Action');
const { requireAddress } = require('@defisaver/sdk/src/utils/general');
const { getAddr } = require('@defisaver/sdk/src/addresses');

class CurveWithdrawImbalanceAction extends Action {
    
    constructor(sender, receiver, pool, lpTpken, maxBurnAmount, amounts = []) {
        requireAddress(sender);
        requireAddress(receiver);
        super('CurveWithdrawImbalanceAction',
            getAddr('CurveWithdrawImbalanceAction'),
            [['address', 'address', 'address', 'address', 'uint256', 'uint256[]']],
            [[...arguments]]);

        this.mappableArgs = [
            this.args[0][0],
            this.args[0][1],
            this.args[0][2],
            this.args[0][3],
            this.args[0][4],
        ];
        this.mappableArgs.concat(
            this.args[0][5],
        );
    }

    async getAssetsToApprove() {
        return { asset: this.args[0][3], owner: this.args[0][0] };
    }
}

module.exports = CurveWithdrawImbalanceAction;
