import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import { EthAddress } from '../../types';

/**
 * @category Curve
 */
export class CurveClaimFeesAction extends Action {
  /**
     *
     * @param claimFor
     * @param receiver
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
      [claimFor, receiver]);

    this.mappableArgs = [
      this.args[0],
      this.args[1],
    ];
  }
}