import { getAssetInfo } from '@defisaver/tokens';
import Action from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import {EthAddress} from '../../types';

/**
 * @category Curve
 */
export class CurveClaimFeesAction extends Action {

    /**
     *
     * @param {EthAddress} claimFor
     * @param {EthAddress} receiver
     */
    constructor(
        claimFor:EthAddress,
        receiver:EthAddress,
    ) {
        requireAddress(claimFor);
        requireAddress(receiver);
        super('CurveClaimFeesAction',
            getAddr('CurveClaimFeesAction'),
            ['address', 'address'],
            [...arguments]);

        this.mappableArgs = [
            this.args[0],
            this.args[1],
        ];
    }
}