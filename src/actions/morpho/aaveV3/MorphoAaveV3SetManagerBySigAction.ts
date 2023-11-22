import { Action } from '../../../Action';
import { getAddr } from '../../../addresses';
import {
  EthAddress, bytes32, uint256, uint8,
} from '../../../types';

/**
 * MorphoAaveV3SetManagerBySig - Borrow token from Morpho AaveV3
 *
 * @category Morpho
 */
export class MorphoAaveV3SetManagerBySigAction extends Action {
  /**
     * @param emodeId Type of emode we are entering in, each one is different deployment on Morpho
     * @param delegator owner of the position
     * @param manager
     * @param isAllowed
     * @param nonce morphoMarket .userNonce(owner)
     * @param deadline
     * @param v
     * @param r
     * @param s
     */
  constructor(
    emodeId: uint256,
    delegator: EthAddress,
    manager: EthAddress,
    isAllowed: boolean,
    nonce:uint256,
    deadline:uint256,
    v:uint8,
    r:bytes32,
    s:bytes32,
  ) {
    super(
      'MorphoAaveV3SetManagerBySig',
      getAddr('MorphoAaveV3SetManagerBySig'),
      ['uint256', 'address', 'address', 'bool', 'uint256', 'uint256', 'uint8', 'bytes32', 'bytes32'],
      [emodeId, delegator, manager, isAllowed, nonce, deadline, v, r, s],
    );

    this.mappableArgs = [
    ];
  }
}