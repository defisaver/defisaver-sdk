import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import {
  EthAddress,
  bytes,
  uint256,
  uint8,
} from '../../types';

/**
 * ExecuteSafeTxAction - Execute Safe transaction
 *
 * @category BasicActions
 */
export class ExecuteSafeTxAction extends Action {
  /**
   * @param safe Address of the Safe wallet
   * @param to Destination address of Safe transaction
   * @param value Ether value of Safe transaction
   * @param data Data payload of Safe transaction
   * @param operation Operation type of Safe transaction. 0 = call, 1 = delegateCall
   * @param safeTxGas Gas that should be used for the Safe transaction
   * @param baseGas Gas costs that are independent of the transaction execution(e.g. base transaction fee, signature check, payment of the refund)
   * @param gasPrice Gas price that should be used for the payment calculation
   * @param gasToken  Token address (or 0 if ETH) that is used for the payment
   * @param refundReceiver Address of receiver of gas payment (or 0 if tx.origin
   * @param signatures Packed signature data ({bytes32 r}{bytes32 s}{uint8 v})
   */
  constructor(
    safe: EthAddress,
    to: EthAddress,
    value: uint256,
    data: bytes,
    operation: uint8,
    safeTxGas: uint256,
    baseGas: uint256,
    gasPrice: uint256,
    gasToken: EthAddress,
    refundReceiver: EthAddress,
    signatures: bytes,
  ) {
    super(
      'ExecuteSafeTx',
      getAddr('ExecuteSafeTx'),
      [
        'address',
        'address',
        'uint256',
        'bytes',
        'uint8',
        'uint256',
        'uint256',
        'uint256',
        'address',
        'address',
        'bytes',
      ],
      [
        safe,
        to,
        value,
        data,
        operation,
        safeTxGas,
        baseGas,
        gasPrice,
        gasToken,
        refundReceiver,
        signatures,
      ],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[4],
      this.args[5],
      this.args[6],
      this.args[7],
      this.args[8],
      this.args[9],
    ];
  }
}
