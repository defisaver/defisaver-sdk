import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { uint256, EthAddress } from '../../types';
import { getAddr } from '../../addresses';

/**
 * MakerWithdrawAction - Withdraw token from a Vault
 *
 * @category Maker
 */
export class MakerWithdrawAction extends Action {
  /**
   * @param vaultId
   * @param amount
   * @param joinAddr
   * @param to
   * @param mcdManager
   */
  constructor(vaultId:uint256, amount:uint256, joinAddr:EthAddress, to:EthAddress, mcdManager:EthAddress = getAddr('McdCdpManager')) {
    requireAddress(to);
    super('McdWithdraw', getAddr('McdWithdraw'), ['uint256', 'uint256', 'address', 'address', 'address'], [vaultId, amount, joinAddr, to, mcdManager]);
  }
}