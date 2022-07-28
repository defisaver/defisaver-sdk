const Action = require("../../Action");
const { getAddr } = require('../../addresses.js');

/**
 * MakerBoostCompositeAction - executes a boost in a single action
 */
class MakerBoostCompositeAction extends Action {
    /**
     * @param vaultId {VaultId}
     * @param boostAmount {string}
     * @param mcdManager {EthAddress}
     * @param joinAddr {EthAddress}
     * @param exchangeParams {ExchangeData}
     */
    constructor(
        vaultId,
        boostAmount,
        mcdManager,
        joinAddr,
        exchangeParams,
    ) {
        super(
            'McdBoostComposite',
            getAddr('McdBoostComposite'),
            [
                'uint256',
                'uint256',
                'address',
                'address',
                ['address', 'address', 'uint256', 'uint256', 'uint256', 'uint256', 'address', 'address', 'bytes', ['address', 'address', 'address', 'uint256', 'uint256', 'bytes']],
            ],
            [
                vaultId,
                boostAmount,
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

module.exports = MakerBoostCompositeAction;
