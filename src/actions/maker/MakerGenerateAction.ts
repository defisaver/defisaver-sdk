import {Action}  from "../../Action";
import { requireAddress } from "../../utils/general";
import { getAddr } from '../../addresses.js';
import {EthAddress,uint256} from '../../types';

/**
 * MakerGenerateAction - Generated Dai from a Vault
 * 
 * @category Maker
 */
export class MakerGenerateAction extends Action {
  /**
   * @param vaultId {VaultId}
   * @param amount {string} Amount of DAI to generate in wei
   * @param to {EthAddress} Generated DAI will be sent to this address
   * @param mcdManager {EthAddress}
   */
  constructor(vaultId:uint256, amount:EthAddress, to:EthAddress, mcdManager:EthAddress = getAddr('McdCdpManager')) {
    requireAddress(to);
    super('McdGenerate', getAddr('McdGenerate'), ['uint256','uint256','address','address'], [vaultId, amount, to, mcdManager]);
  }
}