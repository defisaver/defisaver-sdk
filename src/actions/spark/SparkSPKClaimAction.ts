import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import {
  EthAddress, uint256,
  bytes32,
} from '../../types';

/**
 * SparkSPKClaimAction - Claim SPK tokens
 *
 * @category Spark
 */
export class SparkSPKClaimAction extends Action {
  /**
     * @param rewardContract - Reward contract address
     * @param to - Address to claim to
     * @param epoch - Epoch number
     * @param account - Account address
     * @param token - Token address
     * @param cumulativeAmount - Cumulative amount to claim
     * @param expectedMerkleRoot - Expected merkle root
     * @param merkleProof - Merkle proof array
   */
  constructor(rewardContract: EthAddress, to: EthAddress, epoch: uint256, account: EthAddress, token: EthAddress, cumulativeAmount: uint256, expectedMerkleRoot: bytes32, merkleProof: Array<bytes32>) {
    super('SparkSPKClaim', getAddr('SparkSPKClaim'),
      ['address', 'address', 'uint256', 'address', 'address', 'uint256', 'bytes32', 'bytes32[]'],
      [rewardContract, to, epoch, account, token, cumulativeAmount, expectedMerkleRoot, merkleProof],
    );

    this.mappableArgs = [
      this.args[0],
    ];
  }
}
