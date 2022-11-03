import {Action}  from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import {EthAddress,uint256} from '../../types';

/**
 * LiquityWithdrawAction - Withdraws collateral from the trove
 * 
 * @category Liquity
 */
export class LiquityWithdrawAction extends Action {
    /**
   * @param collAmount Amount of WETH tokens to withdraw
   * @param to Address that will receive the withdrawn tokens
   */
    constructor(collAmount:uint256, to:EthAddress, upperHint:EthAddress, lowerHint:EthAddress) {
        requireAddress(to);
        super('LiquityWithdraw',
            getAddr('LiquityWithdraw'),
            ['uint256', 'address', 'address', 'address'],
            [...arguments]);

        this.mappableArgs = [
            this.args[0],
            this.args[1],
        ];
    }
}