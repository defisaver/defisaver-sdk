const { getAssetInfo } = require('@defisaver/tokens');
const Action = require('../../Action');
const { requireAddress } = require('../../utils/general');
const { getAddr } = require('../../addresses');

class CurveDepositAction extends Action {

    /**
     * @param {EthAddress} sender
     * @param {EthAddress} receiver
     * @param {EthAddress} depositTarget
     * @param {EthAddress} lpToken
     * @param {bytes4} sig
     * @param {string} minMintAmount
     * @param {Array<string>} amounts
     * @param {Array<EthAddress>} tokens
     * @param {boolean} useUnderlying
     */
    constructor(
        sender,
        receiver,
        depositTarget,
        lpToken,
        sig,
        minMintAmount,
        amounts = [],
        tokens = [],
        useUnderlying
    ) {
        requireAddress(sender);
        requireAddress(receiver);
        super('CurveDeposit',
            getAddr('CurveDeposit'),
            [['address', 'address', 'address', 'address', 'bytes4', 'uint256', 'uint256[]', 'address[]', 'bool']],
            [[...arguments]]);

        this.mappableArgs = [
            this.args[0][0],
            this.args[0][1],
            this.args[0][5],
            ...this.args[0][6],
        ];
    }

    async getAssetsToApprove() {
        return this.args[0][7].map(_asset => Object({ asset: _asset, owner: this.args[0][0] }));
    }
}

module.exports = CurveDepositAction;
