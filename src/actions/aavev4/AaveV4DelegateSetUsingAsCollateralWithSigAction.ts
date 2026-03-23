import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { bytes } from '../../types';

/**
 * AaveV4DelegateSetUsingAsCollateralWithSigAction - Approves a delegatee to set using as collateral on behalf of delegator using an EIP712-typed intent.
 *
 * @category AaveV4
 */
export class AaveV4DelegateSetUsingAsCollateralWithSigAction extends Action {
  /**
   * @param permit EIP712-typed intent.
   * @param signature The EIP712-compliant signature bytes.
   */
  constructor(
    permit: Array<any>,
    signature: bytes,
  ) {
    super(
      'AaveV4DelegateSetUsingAsCollateralWithSig',
      getAddr('AaveV4DelegateSetUsingAsCollateralWithSig'),
      [
        ['address', 'address', 'address', 'bool', 'uint256', 'uint256'],
        'bytes',
      ],
      [permit, signature],
    );
  }
}
