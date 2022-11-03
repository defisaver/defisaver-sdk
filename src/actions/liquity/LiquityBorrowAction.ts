import {Action}  from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import {EthAddress,uint256} from '../../types';

/**
 * LiquityBorrowAction - Borrows LUSD from the trove
 * 
 * @category Liquity
 */
export class LiquityBorrowAction extends Action {
    /**
   * @param maxFeePercentage Highest borrowing fee to accept
   * @param lusdAmount Amount of LUSD tokens to borrow
   * @param to Address that will receive the borrowed tokens
   */
    constructor(maxFeePercentage:uint256, lusdAmount:uint256, to: EthAddress, upperHint:EthAddress, lowerHint:EthAddress) {
        requireAddress(to);
        super('LiquityBorrow',
            getAddr('LiquityBorrow'),
            ['uint256', 'uint256', 'address', 'address', 'address'],
            [maxFeePercentage, lusdAmount, to, upperHint, lowerHint]);

        this.mappableArgs = [
            this.args[0],
            this.args[1],
            this.args[2],
        ];
    }
}