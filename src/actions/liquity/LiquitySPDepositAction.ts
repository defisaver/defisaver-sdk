import { getAssetInfo } from '@defisaver/tokens';
import Action from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import {EthAddress,uint256} from '../../types';
/**
 * LiquitySPDepositAction - Deposits LUSD to the stability pool
 * 
 * @category Liquity
 */
export class LiquitySPDepositAction extends Action {
    /**
     * @param lusdAmount Amount of LUSD tokens to deposit
     * @param from Address where the tokens are being pulled from
     * @param wethTo Address that will receive ETH gains
     * @param lqtyTo Address that will receive LQTY gains
     */
    constructor(lusdAmount:uint256, from:EthAddress, wethTo:EthAddress, lqtyTo:EthAddress) {
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