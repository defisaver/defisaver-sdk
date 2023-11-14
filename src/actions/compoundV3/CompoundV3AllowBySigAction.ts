import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import {
  EthAddress, bytes32, uint256, uint8,
} from '../../types';

/**
 * CompoundV3AllowBySigAction - Change if manager has authority over owner based on isAllowed from CompoundV3
 *
 * @category CompundV3
 */
export class CompoundV3AllowBySigAction extends Action {
  /**
     * @param market Comet proxy address of the market
     * @param owner address of the position owner
     * @param manager address of manager
     * @param isAllowed
     * @param nonce Comp market .userNonce(owner)
     * @param expiry deadline
     * @param v
     * @param r
     * @param s
     */
  constructor(market:EthAddress, owner: EthAddress, manager:EthAddress, isAllowed:boolean, nonce:uint256, expiry:uint256, v:uint8, r:bytes32, s:bytes32) {
    requireAddress(manager);
    requireAddress(market);
    requireAddress(owner);
    super(
      'CompV3AllowBySig',
      getAddr('CompV3AllowBySig'),
      ['address', 'address', 'address', 'bool', 'uint256', 'uint256', 'uint8', 'bytes32', 'bytes32'],
      [market, owner, manager, isAllowed, nonce, expiry, v, r, s]);

    this.mappableArgs = [];
  }
}