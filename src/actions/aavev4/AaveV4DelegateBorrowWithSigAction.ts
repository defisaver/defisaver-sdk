import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { bytes } from '../../types';

/**
 * AaveV4DelegateBorrowWithSigAction -Approves a spender to borrow from the specified reserve using an EIP712-typed intent.
 *
 * @category AaveV4
 */
export class AaveV4DelegateBorrowWithSigAction extends Action {
  /**
   * @param permit EIP712-typed intent.
   * @param signature The EIP712-compliant signature bytes.
   */
  constructor(
    permit: Array<any>,
    signature: bytes,
  ) {
    super(
      'AaveV4DelegateBorrowWithSig',
      getAddr('AaveV4DelegateBorrowWithSig'),
      [
        ['address', 'uint256', 'address', 'address', 'uint256', 'uint256', 'uint256'],
        'bytes',
      ],
      [permit, signature],
    );
  }
}
