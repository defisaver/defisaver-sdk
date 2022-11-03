import {Action}  from "../../Action";
import { getAddr } from '../../addresses.js';
import {EthAddress} from '../../types';

/**
 * MakerOpenVaultAction
 * 
 * @category Maker
 */
export class MakerOpenVaultAction extends Action {
  /**
   * @param joinAddr {EthAddress}
   * @param mcdManager {EthAddress}
   */
  constructor(joinAddr:EthAddress, mcdManager:EthAddress = getAddr('McdCdpManager')) {
    super('McdOpen', getAddr('McdOpen'), ['address','address'], [joinAddr, mcdManager]);
  }
}