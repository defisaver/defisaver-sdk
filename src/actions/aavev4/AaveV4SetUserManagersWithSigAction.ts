import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, bytes, uint256 } from '../../types';

/**
 * AaveV4SetUserManagersWithSigAction - Sets user position managers with EIP712-typed signature.
 *
 * @category AaveV4
 */
export class AaveV4SetUserManagersWithSigAction extends Action {
  /**
   * @param spoke Address of the spoke.
   * @param onBehalf The address of the user on whose behalf position manager can act.
   * @param nonce The nonce for the signature.
   * @param deadline The deadline for the signature.
   * @param signature The signature bytes.
   * @param updates The array of position manager updates.
   */
  constructor(
    spoke: EthAddress,
    onBehalf: EthAddress,
    nonce: uint256,
    deadline: uint256,
    signature: bytes,
    updates: Array<[EthAddress, boolean]>,
  ) {
    super(
      'AaveV4SetUserManagersWithSig',
      getAddr('AaveV4SetUserManagersWithSig'),
      ['address', 'address', 'uint256', 'uint256', 'bytes', '(address,bool)[]'],
      [spoke, onBehalf, nonce, deadline, signature, updates],
    );
  }
}
