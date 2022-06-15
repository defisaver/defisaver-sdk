const Action = require('../../Action');
const { requireAddress } = require('../../utils/general');
const { getAddr } = require('../../addresses');

class CurveGaugeWithdrawAction extends Action {

    /**
     * @param {EthAddress} gaugeAddr
     * @param {EthAddress} lpToken
     * @param {EthAddress} receiver
     * @param {string} amount
     */
    constructor(gaugeAddr, lpToken, receiver, amount) {
        requireAddress(receiver);
        super('CurveGaugeWithdraw',
            getAddr('CurveGaugeWithdraw'),
            ['address', 'address', 'address', 'uint256'],
            [...arguments],
        );

        this.mappableArgs = [
            this.args[2],
            this.args[3],
        ];
    }
}

module.exports = CurveGaugeWithdrawAction;
