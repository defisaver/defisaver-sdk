const Action = require("../../Action");
const { getAddr } = require('../../addresses.js');

/**
 * MakerBoostCompositeAction - executes a boost in a single action
 */
class MakerBoostCompositeAction extends Action {
    /**
     * @param vaultId {VaultId}
     * @param mcdManager {EthAddress}
     * @param joinAddr {EthAddress}
     * @param exchangeParams {ExchangeData}
     */
    constructor(
        vaultId,
        mcdManager,
        joinAddr,
        exchangeParams,
    ) {
        super(
            'McdBoostComposite',
            getAddr('McdBoostComposite'),
            [
                'uint256',
                'address',
                'address',
                ['address', 'address', 'uint256', 'uint256', 'uint256', 'uint256', 'address', 'address', 'bytes', ['address', 'address', 'address', 'uint256', 'uint256', 'bytes']],
            ],
            [
                vaultId,
                mcdManager,
                joinAddr,
                exchangeParams,
            ],
        );

        this.mappableArgs = [
            this.args[0],
            this.args[1],
            this.args[2],
            this.args[3][0],
            this.args[3][1],
            this.args[3][2],
          ];
    }
}

module.exports = MakerBoostCompositeAction;
