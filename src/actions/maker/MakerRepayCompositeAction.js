const Action = require("../../Action");
const { getAddr } = require('../../addresses.js');

/**
 * MakerCompositeRepayAction - executes a repay in a single action
 */
class MakerRepayCompositeAction extends Action {
    /**
     * @param vaultId {VaultId}
     * @param joinAddr {EthAddress}
     * @param gasUsed {string}
     * @param exchangeParams {ExchangeData}
     */
    constructor(
        vaultId,
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
                'uint256',
                ['address', 'address', 'uint256', 'uint256', 'uint256', 'uint256', 'address', 'address', 'bytes', ['address', 'address', 'address', 'uint256', 'uint256', 'bytes']],
            ],
            [
                vaultId,
                joinAddr,
                gasUsed,
                exchangeParams,
            ],
        );

        this.mappableArgs = [
            this.args[0],
            this.args[1],
            this.args[3][0],
            this.args[3][1],
            this.args[3][2],
          ];
    }
}

module.exports = MakerRepayCompositeAction;
