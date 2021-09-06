const Action = require('@defisaver/sdk/src/Action');
const { requireAddress } = require('@defisaver/sdk/src/utils/general');
const { getAddr } = require('@defisaver/sdk/src/addresses');

class CurveMintCrvManyAction extends Action {
    
    constructor(gaugeAddrs, receiver) {
        requireAddress(receiver);
        super('CurveMintCrvMany',
            getAddr('CurveMintCrvMany'),
            [['address[8]', 'address']],
            [[...arguments]],
        );

        this.mappableArgs = [
            this.args[0][1],
        ];
    }
}

module.exports = CurveMintCrvManyAction;
