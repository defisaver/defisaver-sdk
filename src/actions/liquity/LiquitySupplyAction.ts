import { getAssetInfo } from '@defisaver/tokens';
import {Action}  from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import {EthAddress,uint256} from '../../types';

/**
 * LiquitySupplyAction - Supplies collateral to the trove
 * 
 * @category Liquity
 */
export class LiquitySupplyAction extends Action {
    /**
   * @param collAmount Amount of WETH tokens to supply
   * @param from Address where the tokens are pulled from
   */
    constructor(collAmount:uint256, from:EthAddress, upperHint:EthAddress, lowerHint:EthAddress) {
        requireAddress(from);
        super('LiquitySupply',
            getAddr('LiquitySupply'),
            ['uint256', 'address', 'address', 'address'],
            [collAmount, from, upperHint, lowerHint]);

        this.mappableArgs = [
            this.args[0],
            this.args[1],
        ];
    }

    async getAssetsToApprove() {
        return [{ asset: getAssetInfo('WETH').address, owner: this.args[1]}];
    }
}