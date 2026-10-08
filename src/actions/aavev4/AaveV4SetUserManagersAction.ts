import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress } from '../../types';

/**
 * AaveV4SetUserManagersAction - Sets position managers for the user's wallet.
 *
 * @category AaveV4
 */
export class AaveV4SetUserManagersAction extends Action {
  /**
   * @param spoke Address of the spoke.
   * @param updates The array of position manager updates.
   */
  constructor(
    spoke: EthAddress,
    updates: Array<[EthAddress, boolean]>,
  ) {
    super(
      'AaveV4SetUserManagers',
      getAddr('AaveV4SetUserManagers'),
      ['address', 'tuple(address,bool)[]'],
      [spoke, updates],
    );
  }
}
