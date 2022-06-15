const Action = require('../../Action');
const { requireAddress } = require('../../utils/general');
const { getAddr } = require('../../addresses');

/**
 * LiquityUnstakeAction - Unstakes LQTY tokens
 */
class LiquityUnstakeAction extends Action {
    /**
     * @param lqtyAmount Amount of LQTY tokens that will be unstaked
     * @param to Address that will receive the tokens
     * @param wethTo Address that will receive ETH gains
     * @param lusdTo Address that will receive LUSD gains
     */
    constructor(lqtyAmount, to, wethTo, lusdTo) {
        requireAddress(to);
        requireAddress(wethTo);
        requireAddress(lusdTo);
        super('LiquityUnstake',
            getAddr('LiquityUnstake'),
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

module.exports = LiquityUnstakeAction;
