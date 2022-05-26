const { getAssetInfo } = require('@defisaver/tokens');
const Action = require('../../Action');
const { requireAddress } = require('../../utils/general');
const { getAddr } = require('../../addresses');

class CurveSwapAction extends Action {

    /**
     *
     * @param {EthAddress} sender
     * @param {EthAddress} receiver
     * @param {EthAddress} pool
     * @param {EthAddress} tokenA
     * @param {EthAddress} tokenB
     * @param {string} amount
     * @param {string} expected
     */
    constructor(sender, receiver, pool, tokenA, tokenB, amount, expected) {
        requireAddress(sender);
        requireAddress(receiver);
        super('CurveSwap',
            getAddr('CurveSwap'),
            ['address', 'address', 'address', 'address', 'address', 'uint256', 'uint256'],
            [...arguments]);

        this.mappableArgs = [
            this.args[0],
            this.args[1],
            this.args[5],
            this.args[6],
        ];
    }

    async getAssetsToApprove() {
        return [{ asset: this.args[3], owner: this.args[0] }];
    }
}

module.exports = CurveSwapAction;
