import Action from "../../Action";
import {EthAddress,uint256} from '../../types';
import { getAddr } from '../../addresses.js';

/**
 * MakerMergeAction - merged two vaults of the same type
 */
export default class MakerMergeAction extends Action {
  /**
   * @param srcVaultId {VaultId}
   * @param destVaultId {VaultId}
   * @param mcdManager {EthAddress}
   */
  constructor(srcVaultId:uint256, destVaultId:uint256, mcdManager:EthAddress = getAddr('McdCdpManager')) {
    super('McdMerge', getAddr('McdMerge'), ['uint256','uint256','address'], [srcVaultId, destVaultId, mcdManager]);
  }
}