import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256, bytes32 } from '../../types';

/**
 * MerklClaimAction - Claim Merkl rewards
 *
 * @category Merkl
 */
export class MerklClaimAction extends Action {
  /**
   * @param users - Array filled with smart wallet addresses for each claim
   * @param tokens - Token that is being claimed
   * @param amounts - Amount that is being claimed
   * @param proofs - Array of merkle proofs
   * @param distinctTokens - Distinct tokens that are claimed inside one claim call
   * @param amountsClaimedPerDistinctToken - Sum of amounts per distinct token being claimed
   * @param to - Address which will receive claimed tokens
   */
  constructor(
    users:Array<EthAddress>,
    tokens:Array<EthAddress>,
    amounts:Array<uint256>,
    proofs:Array<Array<bytes32>>,
    distinctTokens:Array<EthAddress>,
    amountsClaimedPerDistinctToken:Array<uint256>,
    to:EthAddress,
  ) {
    super(
      'MerklClaim',
      getAddr('MerklClaim'),
      ['address[]', 'address[]', 'uint256[]', 'bytes32[][]', 'address[]', 'uint256[]', 'address'],
      [users, tokens, amounts, proofs, distinctTokens, amountsClaimedPerDistinctToken, to],
    );
  }
}
