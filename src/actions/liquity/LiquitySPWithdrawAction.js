const Action = require('../../Action');
const { requireAddress } = require('../../utils/general');
const { getAddr } = require('../../addresses');

/**
 * LiquitySPWithdrawAction - Withdraws a portion of deposited LUSD from the stability pool
 */
class LiquitySPWithdrawAction extends Action {
    /**
     * @param lusdAmount Amount of LUSD tokens to withdraw
     * @param to Address that will receive the LUSD tokens
     * @param wethTo Address that will receive ETH gains
     * @param lqtyTo Address that will receive LQTY gains
     */
    constructor(lusdAmount, to, wethTo, lqtyTo) {
        requireAddress(to);
        requireAddress(wethTo);
        requireAddress(lqtyTo);
        super('LiquitySPWithdraw',
            getAddr('LiquitySPWithdraw'),
            ['uint256', 'address', 'address', 'address'],
            [...arguments]);

        this.mappableArgs = [
            this.args[0],
            this.args[1],
            this.args[2],
            this.args[3],
        ];
    }
}

module.exports = LiquitySPWithdrawAction;
