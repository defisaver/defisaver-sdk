import Action from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import {EthAddress} from '../../types';

/**
 * @category Curve
 */
export class CurveMintCrvAction extends Action {

    /**
     * @param {Array<EthAddress>} gaugeAddrs
     * @param {EthAddress} receiver
     */
    constructor(gaugeAddrs:EthAddress[8], receiver:EthAddress) {
        requireAddress(receiver);
        super('CurveMintCrv',
            getAddr('CurveMintCrv'),
            ['address[8]', 'address'],
            [...arguments],
        );

        this.mappableArgs = [
            this.args[8],
        ];
    }
}