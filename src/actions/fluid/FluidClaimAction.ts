import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256, bytes32 } from '../../types';

/**
 * FluidClaimAction - Claim Fluid rewards
 *
 * @category Fluid
 */
export class FluidClaimAction extends Action {
  /**
   * @param to Address to send the claimed tokens to.
   * @param recipient Address of the user who received the reward (Obtained from API).
   * @param cumulativeAmount Total cumulative amount of tokens to claim (Obtained from API).
   * @param positionId The ID of the position. For earn positions, this will be fToken address (Obtained from API).
   * @param cycle The cycle of the rewards program (Obtained from API).
   * @param merkleProof The Merkle proof to claim the rewards (Obtained from API).
   */
  constructor(
    to: EthAddress,
    recipient: EthAddress,
    cumulativeAmount: uint256,
    positionId: bytes32,
    cycle: uint256,
    merkleProof: Array<bytes32>,
  ) {
    super(
      'FluidClaim',
      getAddr('FluidClaim'),
      ['address', 'address', 'uint256', 'bytes32', 'uint256', 'bytes32[]'],
      [to, recipient, cumulativeAmount, positionId, cycle, merkleProof],
    );
  }
}
