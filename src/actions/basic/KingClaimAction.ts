import { requireAddress } from '../../utils/general';
import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { bytes32, EthAddress, uint256 } from '../../types';

/**
 * Action to Claim KING token as EtherFi reward on behalf of smart wallet
 *
 * @category BasicActions
 */
export class KingClaimAction extends Action {
  /**
   * @param to
   * @param amount
   * @param merkleRoot
   * @param merkleProof
   */
  constructor(to:EthAddress, amount:uint256, merkleRoot:bytes32, merkleProof: Array<bytes32>) {
    requireAddress(to);
    super(
      'KingClaim',
      getAddr('KingClaim'),
      [
        'address',
        'uint256',
        'bytes32',
        'bytes32[]',
      ],
      [to, amount, merkleRoot, merkleProof],
    );
  }
}