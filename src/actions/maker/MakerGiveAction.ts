import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { EthAddress, uint256 } from '../../types';
import { getAddr } from '../../addresses';

/**
 * MakerGiveAction - gives a vault to a selected address
 *
 * @category Maker
 */
export class MakerGiveAction extends Action {
  /**
   * @param vaultId
   * @param newOwner
   * @param mcdManager
   */
  constructor(vaultId:uint256, newOwner:EthAddress, mcdManager:EthAddress = getAddr('McdCdpManager')) {
    requireAddress(newOwner);
    super('McdGive', getAddr('McdGive'), ['uint256', 'address', 'address'], [vaultId, newOwner, mcdManager]);

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
    ];
  }
}