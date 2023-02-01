import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256, bytes32 } from '../../types';

/**
 * MorphoClaimAction - Claim Morpho rewards
 *
 * @category Morpho
 */
export class MorphoClaimAction extends Action {
  /**
   * @param onBehalfOf - Address for which to claim
   * @param claimable - Claimable amount
   * @param proof - Merkle proof of claim
   */
  constructor(onBehalfOf:EthAddress, claimable:uint256, proof:Array<bytes32>) {
    super('MorphoClaim', getAddr('MorphoClaim'), ['address', 'uint256', 'bytes32[]'], [onBehalfOf, claimable, proof]);

    this.mappableArgs = [
      this.args[0],
    ];
  }
}
