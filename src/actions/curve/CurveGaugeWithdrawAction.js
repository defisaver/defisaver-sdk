const Action = require('@defisaver/sdk/src/Action');
const { requireAddress } = require('@defisaver/sdk/src/utils/general');
const { getAddr } = require('@defisaver/sdk/src/addresses');

class CurveGaugeWithdrawAction extends Action {
    
    constructor(gaugeAddr, receiver, amount) {
        requireAddress(receiver);
        super('CurveGaugeWithdraw',
            getAddr('CurveGaugeWithdraw'),
            [['address', 'address', 'uint256']],
            [[...arguments]],
        );

        this.mappableArgs = [
            this.args[0][1],
            this.args[0][2],
        ];
    }
}

module.exports = CurveGaugeWithdrawAction;
