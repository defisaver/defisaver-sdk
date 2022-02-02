const Action = require('@defisaver/sdk/src/Action');
const { requireAddress } = require('@defisaver/sdk/src/utils/general');
const { getAddr } = require('@defisaver/sdk/src/addresses');

class CurveGaugeDepositAction extends Action {
    
    constructor(gaugeAddr, lpToken, sender, onBehalfOf, amount) {
        requireAddress(sender);
        requireAddress(onBehalfOf);
        super('CurveGaugeDeposit',
            getAddr('CurveGaugeDeposit'),
            [['address', 'address', 'address', 'address', 'uint256']],
            [[...arguments]],
        );

        this.mappableArgs = [
            this.args[0][2],
            this.args[0][3],
            this.args[0][4],
        ];
    }

    async getAssetsToApprove() {
        return { asset: this.args[0][1], owner: this.args[0][2] };
    }
}

module.exports = CurveGaugeDepositAction;
