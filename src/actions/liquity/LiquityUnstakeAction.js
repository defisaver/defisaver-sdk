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
    */
    constructor(lqtyAmount, to) {
        requireAddress(to);
        super('LiquityUnstake',
            getAddr('LiquityUnstake'),
            ['uint256', 'address'],
            [...arguments]);
    }
}

module.exports = LiquityUnstakeAction;
