import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * MakerGenerateAction - Generated Dai from a Vault
 *
 * @category Maker
 */
export class MakerGenerateAction extends Action {
  /**
   * @param vaultId
   * @param amount Amount of DAI to generate in wei
   * @param to Generated DAI will be sent to this address
   * @param mcdManager
   */
  constructor(vaultId:uint256, amount:EthAddress, to:EthAddress, mcdManager:EthAddress = getAddr('McdCdpManager')) {
    requireAddress(to);
    super('McdGenerate', getAddr('McdGenerate'), ['uint256', 'uint256', 'address', 'address'], [vaultId, amount, to, mcdManager]);
  }
}