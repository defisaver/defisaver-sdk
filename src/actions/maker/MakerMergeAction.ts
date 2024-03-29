import { Action } from '../../Action';
import { EthAddress, uint256 } from '../../types';
import { getAddr } from '../../addresses';

/**
 * MakerMergeAction - merged two vaults of the same type
 *
 * @category Maker
 */
export class MakerMergeAction extends Action {
  /**
   * @param srcVaultId
   * @param destVaultId
   * @param mcdManager
   */
  constructor(srcVaultId:uint256, destVaultId:uint256, mcdManager:EthAddress = getAddr('McdCdpManager')) {
    super('McdMerge', getAddr('McdMerge'), ['uint256', 'uint256', 'address'], [srcVaultId, destVaultId, mcdManager]);
  }
}