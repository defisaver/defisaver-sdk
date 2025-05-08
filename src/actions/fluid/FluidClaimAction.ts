import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import {
  EthAddress,
  uint256,
  bytes32,
  uint8,
  bytes,
} from '../../types';

/**
 * FluidClaimAction - Claim Fluid rewards
 *
 * @category Fluid
 */
export class FluidClaimAction extends Action {
  /**
   * @param to Address to send the claimed tokens to.
   * @param cumulativeAmount Total cumulative amount of tokens to claim (Obtained from API).
   * @param positionId The ID of the position. For earn positions, this will be fToken address (Obtained from API).
   * @param positionType The type of the position (Obtained from API).
   * @param cycle The cycle of the rewards program (Obtained from API).
   * @param merkleProof The Merkle proof to claim the rewards (Obtained from API).
   * @param metadata Additional metadata for the claim. (Obtained from API).
   */
  constructor(
    to: EthAddress,
    cumulativeAmount: uint256,
    positionId: bytes32,
    positionType: uint8,
    cycle: uint256,
    merkleProof: Array<bytes32>,
    metadata: bytes,
  ) {
    super(
      'FluidClaim',
      getAddr('FluidClaim'),
      [
        'address', // to
        'uint256', // cumulativeAmount
        'bytes32', // positionId
        'uint8', // positionType
        'uint256', // cycle
        'bytes32[]', // merkleProof
        'bytes', // metadata
      ],
      [
        to,
        cumulativeAmount,
        positionId,
        positionType,
        cycle,
        merkleProof,
        metadata,
      ],
    );
  }
}
