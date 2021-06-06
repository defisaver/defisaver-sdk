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
   */
    constructor(lusdAmount, to) {
        requireAddress(to);
        super('LiquitySPWithdraw',
            getAddr('LiquitySPWithdraw'),
            ['uint256', 'address'],
            [...arguments]);
    }
}

module.exports = LiquitySPWithdrawAction;
