const Action = require("../../Action");
const { getAddr } = require('../../addresses.js');

/**
 * MakerCompositeRepayAction - executes a repay in a single action
 */
class MakerRepayCompositeAction extends Action {
    /**
     * @param vaultId {VaultId}
     * @param repayAmount {string}
     * @param mcdManager {EthAddress}
     * @param joinAddr {EthAddress}
     * @param exchangeParams {ExchangeData}
     */
    constructor(
        vaultId,
        repayAmount,
        mcdManager,
        joinAddr,
        exchangeParams,
    ) {
        super(
            'MakerRepayComposite',
            getAddr('McdRepayComposite'),
            [
                'uint256',
                'uint256',
                'address',
                'address',
                ['address', 'address', 'uint256', 'uint256', 'uint256', 'uint256', 'address', 'address', 'bytes', ['address', 'address', 'address', 'uint256', 'uint256', 'bytes']],
            ],
            [
                vaultId,
                repayAmount,
                mcdManager,
                joinAddr,
                exchangeParams,
            ],
        );

        this.mappableArgs = [
            this.args[0],
            this.args[1],
            this.args[2],
            this.args[3],
            this.args[4][0],
            this.args[4][1],
            this.args[4][2],
          ];
    }
}

module.exports = MakerRepayCompositeAction;
