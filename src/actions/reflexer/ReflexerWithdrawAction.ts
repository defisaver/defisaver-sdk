import Action from "../../Action";
import { requireAddress } from "../../utils/general";
import {EthAddress,uint256} from '../../types';
import { getAddr } from '../../addresses.js';

/**
 * ReflexerWithdrawAction - Withdraw token from a Safe
 */
export default class ReflexerWithdrawAction extends Action {
  /**
   * @param vaultId {SafeId}
   * @param amount {string}
   * @param adapterAddr {EthAddress}
   * @param to {EthAddress}
   */
  constructor(safeId:uint256, amount:uint256, adapterAddr:EthAddress, to:EthAddress) {
    requireAddress(to);
    super('ReflexerWithdraw', getAddr('ReflexerWithdraw'), ['uint256','uint256','address','address'], [safeId, amount, adapterAddr, to]);
  }
}