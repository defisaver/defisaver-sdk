import {Action}  from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses.js';
import {EthAddress,uint256} from '../../types';

/**
 * MStableClaimAction
 * 
 * @category MStable
 */
export class MStableClaimAction extends Action {
    /**
     * @param vaultAddress
     * @param to
     * @param first
     * @param last
     */
    constructor(
        vaultAddress:EthAddress,
        to:EthAddress,
        first:uint256,
        last:uint256,
    ) {
        requireAddress(vaultAddress);
        requireAddress(to);

        super(
            'MStableClaim',
            getAddr('MStableClaim'),
            ['address', 'address', 'uint256', 'uint256'],
            [...arguments],
        );

        this.mappableArgs = [
            this.args[0],
            this.args[1],
        ];
    }
}