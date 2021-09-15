const Action = require('@defisaver/sdk/src/Action');
const { requireAddress } = require('@defisaver/sdk/src/utils/general');
const { getAddr } = require('@defisaver/sdk/src/addresses');

class CurveLockWithdrawAction extends Action {
    
    constructor(receiver) {
        requireAddress(sender);
        super('CurveLockWithdraw',
            getAddr('CurveLockWithdraw'),
            ['address'],
            [sender],
        );

        this.mappableArgs = [
            this.args[0],
        ];
    }
}

module.exports = CurveLockWithdrawAction;
