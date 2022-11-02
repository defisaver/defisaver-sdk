import Action from "../../Action";
import { requireAddress } from "../../utils/general";
import {uint256, EthAddress} from '../../types';
import { getAddr } from '../../addresses.js';

/**
 * MakerWithdrawAction - Withdraw token from a Vault
 */
export default class MakerWithdrawAction extends Action {
  /**
   * @param vaultId {VaultId}
   * @param amount {string}
   * @param joinAddr {EthAddress}
   * @param to {string}
   * @param mcdManager {EthAddress}
   */
  constructor(vaultId:uint256, amount:uint256, joinAddr:EthAddress, to:EthAddress, mcdManager:EthAddress = getAddr('McdCdpManager')) {
    requireAddress(to);
    super('McdWithdraw', getAddr('McdWithdraw'), ['uint256','uint256','address','address','address'], [vaultId, amount, joinAddr, to, mcdManager]);
  }
}