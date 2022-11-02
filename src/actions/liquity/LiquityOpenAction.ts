import { getAssetInfo } from '@defisaver/tokens';
import Action from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import {EthAddress,uint256} from '../../types';

/**
 * LiquityOpenAction - Opens up a trove
 */
export default class LiquityOpenAction extends Action {
    /**
   * @param maxFeePercentage Highest borrowing fee to accept
   * @param collAmount Amount of WETH tokens to deposit as collateral
   * @param lusdAmount Amount of LUSD tokens to borrow
   * @param from Address where the tokens are pulled from
   * @param to Address that will receive borrowed tokens
   */
    constructor(maxFeePercentage:uint256, collAmount:uint256, lusdAmount:uint256, from:EthAddress, to:EthAddress, upperHint:EthAddress, lowerHint:EthAddress) {
        requireAddress(from);
        requireAddress(to);
        super('LiquityOpen',
            getAddr('LiquityOpen'),
            ['uint256', 'uint256', 'uint256', 'address', 'address', 'address', 'address'],
            [...arguments]);

        this.mappableArgs = [
            this.args[0],
            this.args[1],
            this.args[2],
            this.args[3],
            this.args[4],
        ];
    }

    async getAssetsToApprove() {
        return [{ asset: getAssetInfo('WETH').address, owner: this.args[3]}];
    }
}