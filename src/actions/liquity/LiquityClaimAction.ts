import Action from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import {EthAddress} from '../../types';

/**
 * LiquityClaimAction - Claims collateral from the closed trove
 * 
 * @category Liquity
 */
export class LiquityClaimAction extends Action {
    /**
   * @param to Address that will receive the collateral
   */
    constructor(to:EthAddress) {
        requireAddress(to);
        super('LiquityClaim',
            getAddr('LiquityClaim'),
            ['address'],
            [...arguments]);

            this.mappableArgs = [
                this.args[0],
              ];
    }
}