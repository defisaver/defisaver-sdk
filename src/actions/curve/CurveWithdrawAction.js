const { getAssetInfo } = require('@defisaver/tokens');
const Action = require('@defisaver/sdk/src/Action');
const { requireAddress } = require('@defisaver/sdk/src/utils/general');
const { getAddr } = require('@defisaver/sdk/src/addresses');

class CurveWithdrawAction extends Action {

    /**
     * 
     * @param {EthAddress} sender 
     * @param {EthAddress} receiver 
     * @param {EthAddress} depositTarget 
     * @param {EthAddress} lpToken 
     * @param {bytes4} sig 
     * @param {string} burnAmount 
     * @param {Array<string>} minAmounts 
     * @param {Array<EthAddress>} tokens 
     * @param {boolean} withdrawExact 
     * @param {boolean} useUnderlying 
     */
    constructor(
        sender,
        receiver,
        depositTarget,
        lpToken,
        sig,
        burnAmount,
        minAmounts = [],
        tokens = [],
        withdrawExact,
        useUnderlying
    ) {
        requireAddress(sender);
        requireAddress(receiver);
        super('CurveWithdrawAction',
            getAddr('CurveWithdrawAction'),
            [['address', 'address', 'address', 'address', 'bytes4', 'uint256', 'uint256[]', 'address[]', 'bool', 'bool']],
            [[...arguments]]);

        this.mappableArgs = [
            this.args[0][0],
            this.args[0][1],
            this.args[0][5],
            ...this.args[0][6],
        ];
    }

    async getAssetsToApprove() {
        return { asset: this.args[0][3], owner: this.args[0][0] };
    }
}

module.exports = CurveWithdrawAction;
