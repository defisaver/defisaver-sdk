import { requireAddress } from '../../utils/general';
import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import {
  EthAddress, bytes32, uint256, uint8,
} from '../../types';

/**
 * Approve a spender to pull tokens from signer with his signature
 *
 * @category BasicActions
 */
export class PermitTokenAction extends Action {
  /**
   * @param token Token address
   * @param owner signer of the permit
   * @param spender address which will get allowance to transfer owners tokens
   * @param value amount of tokens that will be allowed
   * @param deadline
   * @param v
   * @param r
   * @param s
   */
  constructor(token:EthAddress, owner:EthAddress, spender:EthAddress, value:uint256, deadline:uint256, v:uint8, r:bytes32, s:bytes32) {
    requireAddress(spender);
    requireAddress(owner);
    requireAddress(token);
    super(
      'PermitToken',
      getAddr('PermitToken'),
      [
        'address',
        'address',
        'address',
        'uint256',
        'uint256',
        'uint8',
        'bytes32',
        'bytes32',
      ],
      [token, owner, spender, value, deadline, v, r, s],
    );

    this.mappableArgs = [];
  }

  async getAssetsToApprove() {
    return [];
  }
}