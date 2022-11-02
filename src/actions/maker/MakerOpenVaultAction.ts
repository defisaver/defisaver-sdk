import Action from "../../Action";
import { getAddr } from '../../addresses.js';
import {EthAddress} from '../../types';

/**
 * MakerOpenVaultAction
 */
export default class MakerOpenVaultAction extends Action {
  /**
   * @param joinAddr {EthAddress}
   * @param mcdManager {EthAddress}
   */
  constructor(joinAddr:EthAddress, mcdManager:EthAddress = getAddr('McdCdpManager')) {
    super('McdOpen', getAddr('McdOpen'), ['address','address'], [joinAddr, mcdManager]);
  }
}