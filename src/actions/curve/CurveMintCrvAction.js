const Action = require('../../Action');
const { requireAddress } = require('../../utils/general');
const { getAddr } = require('../../addresses');

class CurveMintCrvAction extends Action {

    /**
     * @param {Array<EthAddress>} gaugeAddrs
     * @param {EthAddress} receiver
     */
    constructor(gaugeAddrs, receiver) {
        requireAddress(receiver);
        super('CurveMintCrv',
            getAddr('CurveMintCrv'),
            ['address[8]', 'address'],
            [...arguments],
        );

        this.mappableArgs = [
            this.args[8],
        ];
    }
}

module.exports = CurveMintCrvAction;
