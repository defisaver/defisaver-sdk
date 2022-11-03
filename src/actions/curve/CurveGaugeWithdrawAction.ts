import {Action}  from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import {EthAddress,uint256} from '../../types';

/**
 * @category Curve
 */
export class CurveGaugeWithdrawAction extends Action {

    /**
     * @param gaugeAddr
     * @param lpToken
     * @param receiver
     * @param amount
     */
    constructor(gaugeAddr:EthAddress, lpToken:EthAddress, receiver:EthAddress, amount:uint256) {
        requireAddress(receiver);
        super('CurveGaugeWithdraw',
            getAddr('CurveGaugeWithdraw'),
            ['address', 'address', 'address', 'uint256'],
            [gaugeAddr, lpToken, receiver, amount],
        );

        this.mappableArgs = [
            this.args[2],
            this.args[3],
        ];
    }
}