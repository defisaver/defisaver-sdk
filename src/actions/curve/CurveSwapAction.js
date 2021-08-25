const { getAssetInfo } = require('@defisaver/tokens');
const Action = require('../../Action');
const { requireAddress } = require('../../utils/general');
const { getAddr } = require('../../addresses');

class CurveSwapAction extends Action {
    
    constructor(sender, receiver, pool, from, to, amount, expected) {
        requireAddress(sender);
        requireAddress(receiver);
        super('CurveSwap',
            getAddr('CurveSwap'),
            [['address', 'address', 'address', 'address', 'address', 'uint256', 'uint256']],
            [[...arguments]]);

        this.mappableArgs = [
            this.args[0][0],
            this.args[0][1],
            this.args[0][2],
            this.args[0][3],
            this.args[0][4],
            this.args[0][5],
            this.args[0][6],
        ];
    }

    async getAssetsToApprove() {
        return [{ asset: this.args[0][3], owner: this.args[0][0] }];
    }
}

module.exports = CurveSwapAction;
