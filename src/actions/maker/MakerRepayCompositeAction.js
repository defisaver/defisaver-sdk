const Action = require("../../Action");
const { getAddr } = require('../../addresses.js');

/**
 * MakerCompositeRepayAction - executes a repay in a single action
 */
class MakerRepayCompositeAction extends Action {
    /**
     * @param vaultId {VaultId}
     * @param mcdManager {EthAddress}
     * @param joinAddr {EthAddress}
     * @param gasUsed {string}
     * @param exchangeParams {ExchangeData}
     */
    constructor(
        vaultId,
        mcdManager,
        joinAddr,
        gasUsed,
        exchangeParams,
    ) {
        super(
            'McdRepayComposite',
            getAddr('McdRepayComposite'),
            [
                'uint256',
                'address',
                'address',
                'uint256',
                ['address', 'address', 'uint256', 'uint256', 'uint256', 'uint256', 'address', 'address', 'bytes', ['address', 'address', 'address', 'uint256', 'uint256', 'bytes']],
            ],
            [
                vaultId,
                mcdManager,
                joinAddr,
                gasUsed,
                exchangeParams,
            ],
        );

        this.mappableArgs = [
            this.args[0],
            this.args[1],
            this.args[2],
            this.args[4][1],
            this.args[4][2],
            this.args[4][0],
          ];
    }
}

module.exports = MakerRepayCompositeAction;
