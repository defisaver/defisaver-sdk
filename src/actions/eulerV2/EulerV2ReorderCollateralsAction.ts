import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint8 } from '../../types';

/**
 * EulerV2ReorderCollateralsAction - Reorder account collaterals. Can be used to optimize gas costs when checking account health status
 *
 * @category EulerV2
 */
export class EulerV2ReorderCollateralsAction extends Action {
  /**
   * @param account The address of the Euler account, defaults to user's wallet
   * @param indexes The array of swap steps to reorder collaterals
   */
  constructor(
    account: EthAddress,
    indexes: Array<Array<uint8>>,
  ) {
    super(
      'EulerV2ReorderCollaterals',
      getAddr('EulerV2ReorderCollaterals'),
      ['address', 'uint8[][]'],
      [account, indexes],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
    ];
  }
}
