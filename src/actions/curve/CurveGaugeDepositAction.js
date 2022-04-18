const Action = require('../../Action');
const { requireAddress } = require('../../utils/general');
const { getAddr } = require('../../addresses');

class CurveGaugeDepositAction extends Action {

    /**
     *
     * @param {EthAddress} gaugeAddr
     * @param {EthAddress} lpToken
     * @param {EthAddress} sender
     * @param {EthAddress} onBehalfOf
     * @param {string} amount
     */
    constructor(gaugeAddr, lpToken, sender, onBehalfOf, amount) {
        requireAddress(sender);
        requireAddress(onBehalfOf);
        super('CurveGaugeDeposit',
            getAddr('CurveGaugeDeposit'),
            ['address', 'address', 'address', 'address', 'uint256'],
            [...arguments],
        );

        this.mappableArgs = [
            this.args[2],
            this.args[3],
            this.args[4],
        ];
    }

    async getAssetsToApprove() {
        return { asset: this.args[1], owner: this.args[2] };
    }
}

module.exports = CurveGaugeDepositAction;
