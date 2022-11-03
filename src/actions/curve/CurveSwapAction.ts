import {Action}  from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import {EthAddress,uint256} from '../../types';

/**
 * @category Curve
 */
export class CurveSwapAction extends Action {

    /**
     *
     * @param sender
     * @param receiver
     * @param pool
     * @param tokenA
     * @param tokenB
     * @param amount
     * @param expected
     */
    constructor(sender:EthAddress, receiver:EthAddress, pool:EthAddress, tokenA:EthAddress, tokenB:EthAddress, amount:uint256, expected:uint256) {
        requireAddress(sender);
        requireAddress(receiver);
        super('CurveSwap',
            getAddr('CurveSwap'),
            ['address', 'address', 'address', 'address', 'address', 'uint256', 'uint256'],
            [...arguments]);

        this.mappableArgs = [
            this.args[0],
            this.args[1],
            this.args[5],
            this.args[6],
        ];
    }

    async getAssetsToApprove() {
        return [{ asset: this.args[3], owner: this.args[0] }];
    }
}