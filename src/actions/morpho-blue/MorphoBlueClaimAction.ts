import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { bytes32, EthAddress, uint256 } from '../../types';

/**
 * MorphoBlueClaimAction - Claim rewards for MorphoBlue users
 *
 * @category MorphoBlue
 */
export class MorphoBlueClaimAction extends Action {
  /**
   * @param to The address to which to send the reward tokens. Only used if claiming for the smart wallet.
   * @param onBehalfOf The address for which to claim the rewards. If address(0) it defaults to smart wallet.
   * @param token The address of the token to claim.
   * @param distributor The address of the morpho distributor contract.
   * @param claimable The overall claimable amount of token rewards.
   * @param merkleProof The merkle proof to claim the rewards.
   */
  constructor(
    to:EthAddress,
    onBehalfOf:EthAddress,
    token:EthAddress,
    distributor:EthAddress,
    claimable:uint256,
    merkleProof: Array<bytes32>,
  ) {
    super(
      'MorphoBlueClaim',
      getAddr('MorphoBlueClaim'),
      ['address', 'address', 'address', 'address', 'uint256', 'bytes32[]'],
      [to, onBehalfOf, token, distributor, claimable, merkleProof],
    );
  }
}