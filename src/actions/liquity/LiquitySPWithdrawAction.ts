import {Action}  from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import {EthAddress,uint256} from '../../types';

/**
 * LiquitySPWithdrawAction - Withdraws a portion of deposited LUSD from the stability pool
 * 
 * @category Liquity
 */
export class LiquitySPWithdrawAction extends Action {
    /**
     * @param lusdAmount Amount of LUSD tokens to withdraw
     * @param to Address that will receive the LUSD tokens
     * @param wethTo Address that will receive ETH gains
     * @param lqtyTo Address that will receive LQTY gains
     */
    constructor(lusdAmount:uint256, to:EthAddress, wethTo:EthAddress, lqtyTo:EthAddress) {
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