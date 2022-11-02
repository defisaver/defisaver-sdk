import { getAssetInfo } from '@defisaver/tokens';
import Action from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import {EthAddress,uint256} from '../../types';

/**
 * LiquityStakeAction - Stakes LQTY tokens
 * 
 * @category Liquity
 */
export class LiquityStakeAction extends Action {
    /**
     * @param lqtyAmount Amount of LQTY tokens that will be staked
     * @param from Address where the tokens are being pulled from
     * @param wethTo Address that will receive ETH gains
     * @param lusdTo Address that will receive LUSD gains
     */
    constructor(lqtyAmount:uint256, from:EthAddress, wethTo:EthAddress, lusdTo:EthAddress) {
        requireAddress(from);
        requireAddress(wethTo);
        requireAddress(lusdTo);
        super('LiquityStake',
            getAddr('LiquityStake'),
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
        return [{ asset: getAssetInfo('LQTY').address, owner: this.args[1]}];
    }
}