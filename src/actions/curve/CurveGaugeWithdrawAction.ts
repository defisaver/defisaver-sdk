import {Action}  from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import {EthAddress,uint256} from '../../types';

/**
 * @category Curve
 */
export class CurveGaugeWithdrawAction extends Action {

    /**
     * @param {EthAddress} gaugeAddr
     * @param {EthAddress} lpToken
     * @param {EthAddress} receiver
     * @param {string} amount
     */
    constructor(gaugeAddr:EthAddress, lpToken:EthAddress, receiver:EthAddress, amount:uint256) {
        requireAddress(receiver);
        super('CurveGaugeWithdraw',
            getAddr('CurveGaugeWithdraw'),
            ['address', 'address', 'address', 'uint256'],
            [...arguments],
        );

        this.mappableArgs = [
            this.args[2],
            this.args[3],
        ];
    }
}