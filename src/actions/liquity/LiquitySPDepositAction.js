const { getAssetInfo } = require('@defisaver/tokens');
const Action = require('../../Action');
const { requireAddress } = require('../../utils/general');
const { getAddr } = require('../../addresses');
/**
 * LiquitySPDepositAction - Deposits LUSD to the stability pool
 */
class LiquitySPDepositAction extends Action {
    /**
     * @param lusdAmount Amount of LUSD tokens to deposit
     * @param from Address where the tokens are being pulled from
     * @param wethTo Address that will receive ETH gains
     * @param lqtyTo Address that will receive LQTY gains
     */
    constructor(lusdAmount, from, wethTo, lqtyTo) {
        requireAddress(from);
        requireAddress(wethTo);
        requireAddress(lqtyTo);
        super('LiquitySPDeposit',
            getAddr('LiquitySPDeposit'),
            ['uint256', 'address', 'address', 'address'],
            [...arguments]);

        this.mappableArgs = [
            this.args[0],
            this.args[1],
            this.args[2],
            this.args[3],
        ];
    }

    async getAssetsToApprove() {
        return [{ asset: getAssetInfo('LUSD').address, owner: this.args[1]}];
    }
}

module.exports = LiquitySPDepositAction;
