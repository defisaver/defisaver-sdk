import Action from "../../Action";
import { getAddr } from '../../addresses.js';
import { requireAddress } from '../../utils/general';
import {EthAddress,uint256} from '../../types';

/**
 * MakerClaimAction - Claim bonus tokens in CropJoin types
 * 
 * @category Maker
 */
export class MakerClaimAction extends Action {
  /**
   * @param vaultId {VaultId}
   * @param joinAddr {EthAddress}
   * @param to {EthAddress} Tokens will be sent to this address
   */
  constructor(vaultId:uint256, joinAddr:EthAddress, to:EthAddress) {
    requireAddress(to);
    super('McdClaim', getAddr('McdClaim'), ['uint256','address','address'], [vaultId, joinAddr, to]);

    this.mappableArgs = [
        this.args[0],
        this.args[1],
        this.args[2],
      ];
  }
}