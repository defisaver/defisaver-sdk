import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * ChangeProxyOwnerAction - Changes EOA which owns the proxy that is being called
 *
 * @category BasicActions
 */
export class ChangeLSVProxyOwnerAction extends Action {
  /**
   * @param newOwner Address of new owner
   */
  constructor(newOwner:EthAddress, noInProxiesArray: uint256) {
    super('ChangeLSVProxyOwner', getAddr('ChangeLSVProxyOwner'), ['address', 'uint256'], [newOwner, noInProxiesArray]);
  }
}