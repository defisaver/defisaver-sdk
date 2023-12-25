import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import {
  EthAddress, bytes32, uint256, uint8,
} from '../../types';

/**
 * @category MorphoBlue
 */
export class MorphoBlueSetAuthWithSigAction extends Action {
  /**
   * @param manager
   * @param newIsAuthorized
   */
  constructor(
    authorizer:EthAddress,
    authorized:EthAddress,
    isAuthorized:boolean,
    nonce:uint256,
    deadline:uint256,
    v:uint8,
    r:bytes32,
    s:bytes32,
  ) {
    super(
      'MorphoBlueSetAuthWithSig',
      getAddr('MorphoBlueSetAuthWithSig'),
      [
        ['address', 'address', 'bool', 'uint256', 'uint256'],
        ['uint8', 'bytes32', 'bytes32'],
      ],
      [
        [authorizer, authorized, isAuthorized, nonce, deadline],
        [v, r, s],
      ],
    );
    this.mappableArgs = [];
  }
}