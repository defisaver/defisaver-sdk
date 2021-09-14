const { getAssetInfo } = require('@defisaver/tokens');
const Action = require('@defisaver/sdk/src/Action');
const { requireAddress } = require('@defisaver/sdk/src/utils/general');
const { getAddr } = require('@defisaver/sdk/src/addresses');

class CurveDepositAction extends Action {
    
    constructor(
        sender,
        receiver,
        depositTarget,
        lpToken,
        sig,
        minMintAmount,
        amounts = [],
        tokens = [],
        useUnderlying
    ) {
        requireAddress(sender);
        requireAddress(receiver);
        super('CurveDeposit',
            getAddr('CurveDeposit'),
            [['address', 'address', 'address', 'address', 'bytes4', 'uint256', 'uint256[]', 'address[]','bool']],
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
        return this.args[0][7].map( _asset => Object({ asset: _asset, owner: this.args[0][0] }));
    }
}

module.exports = CurveDepositAction;
