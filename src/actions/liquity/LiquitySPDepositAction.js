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
   */
    constructor(lusdAmount, from) {
        requireAddress(from);
        super('LiquitySPDeposit',
            getAddr('LiquitySPDeposit'),
            ['uint256', 'address'],
            [...arguments]);
    }

    async getAssetsToApprove() {
        return [{ asset: getAssetInfo('LUSD').address, owner: this.args[1] }];
    }
}

module.exports = LiquitySPDepositAction;
