const Action = require('@defisaver/sdk/src/Action');
const { requireAddress } = require('@defisaver/sdk/src/utils/general');
const { getAddr } = require('@defisaver/sdk/src/addresses');

class CurveMintCrvAction extends Action {

    /**
     * @param {Array<EthAddress>]} gaugeAddrs 
     * @param {EthAddress} receiver 
     */
    constructor(gaugeAddrs, receiver) {
        requireAddress(receiver);
        super('CurveMintCrv',
            getAddr('CurveMintCrv'),
            [['address[8]', 'address']],
            [[...arguments]],
        );

        this.mappableArgs = [
            this.args[0][8],
        ];
    }
}

module.exports = CurveMintCrvAction;
