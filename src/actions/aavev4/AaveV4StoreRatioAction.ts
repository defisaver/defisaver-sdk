import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress } from '../../types';

/**
 * AaveV4StoreRatioAction - Stores the ratio for a user in transient storage so it can be checked later after strategy execution.
 *
 * @category AaveV4
 */
export class AaveV4StoreRatioAction extends Action {
  /**
   * @param spoke Address of the spoke.
   * @param user Address of the user to store the ratio for.
   */
  constructor(
    spoke: EthAddress,
    user: EthAddress,
  ) {
    super(
      'AaveV4StoreRatio',
      getAddr('Empty'),
      ['address', 'address'],
      [spoke, user],
    );
    this.mappableArgs = [
      this.args[0],
      this.args[1],
    ];
  }
}
