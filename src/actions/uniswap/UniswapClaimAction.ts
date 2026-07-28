import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256, bytes32 } from '../../types';

/**
 * UniswapClaimAction - Claims UNI tokens from the Uniswap merkle distributor
 *
 * @category Uniswap
 */
export class UniswapClaimAction extends Action {
  /**
   * @param index - Index of the claim in the merkle tree
   * @param to - Address where to send the claimed UNI
   * @param amount - Amount of UNI allocated to the smart wallet in the merkle tree
   * @param merkleProof - Merkle proof of the claim
   */
  constructor(index: uint256, to: EthAddress, amount: uint256, merkleProof: Array<bytes32>) {
    super(
      'UniswapClaim',
      getAddr('UniswapClaim'),
      ['uint256', 'address', 'uint256', 'bytes32[]'],
      [index, to, amount, merkleProof],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
    ];
  }
}
