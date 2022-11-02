import Action from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import {EthAddress,uint256} from '../../types';

/**
 * LiquityUnstakeAction - Unstakes LQTY tokens
 * 
 * @category Liquity
 */
export class LiquityUnstakeAction extends Action {
    /**
     * @param lqtyAmount Amount of LQTY tokens that will be unstaked
     * @param to Address that will receive the tokens
     * @param wethTo Address that will receive ETH gains
     * @param lusdTo Address that will receive LUSD gains
     */
    constructor(lqtyAmount:uint256, to:EthAddress, wethTo:EthAddress, lusdTo:EthAddress) {
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