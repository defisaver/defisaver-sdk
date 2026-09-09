import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress } from '../../types';

/**
 * AaveV4DelegateSetUsingAsCollateralAction - Approves a delegatee to set using as collateral on behalf of the wallet.
 *
 * @category AaveV4DelegateSetUsingAsCollateral
 */
export class AaveV4DelegateSetUsingAsCollateralAction extends Action {
  /**
   * @param spoke Address of the spoke.
   * @param delegatee Address that will receive the permission.
   * @param permission Whether the delegatee can set using as collateral.
   */
  constructor(
    spoke: EthAddress,
    delegatee: EthAddress,
    permission: boolean,
  ) {
    super(
      'AaveV4DelegateSetUsingAsCollateral',
      getAddr('AaveV4DelegateSetUsingAsCollateral'),
      ['address', 'address', 'bool'],
      [spoke, delegatee, permission],
    );
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
    ];
  }
}
