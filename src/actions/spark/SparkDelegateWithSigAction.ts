import { ActionWithL2 } from '../../ActionWithL2';
import { getAddr } from '../../addresses';
import {
  EthAddress, uint8, uint16, uint256,
  bytes32,
} from '../../types';

/**
 * SparkDelegateWithSigCredit - Delegate credit on someone elses behalf with their signature
 *
 * @category Spark
 */
export class SparkDelegateWithSigCredit extends ActionWithL2 {
  constructor(debtToken: EthAddress, delegator: EthAddress, delegatee: EthAddress, value: uint256, deadline: uint256, v: uint8, r: bytes32, s: bytes32) {
    super('SparkDelegateWithSig', getAddr('SparkDelegateWithSig'),
      ['address', 'address', 'address', 'uint256', 'uint256', 'uint8', 'bytes32', 'bytes32'],
      [debtToken, delegator, delegatee, value, deadline, v, r, s],
    );
  }

  encodeInputs() {
    // executeActionDirectL2
    let encodedInput = '0x2895f3aa';
    // debtToken
    encodedInput = encodedInput.concat(this.addressToBytes20(this.args[0]));
    // delegator
    encodedInput = encodedInput.concat(this.addressToBytes20(this.args[1]));
    // delegatee
    encodedInput = encodedInput.concat(this.addressToBytes20(this.args[2]));
    // value
    encodedInput = encodedInput.concat(this.numberToBytes32(this.args[3]));
    // deadline
    encodedInput = encodedInput.concat(this.numberToBytes32(this.args[4]));
    // v
    encodedInput = encodedInput.concat(this.numberToBytes1(this.args[5]));
    // r
    encodedInput = encodedInput.concat(this.args[6].slice(2));
    // s
    encodedInput = encodedInput.concat(this.args[7].slice(2));
    return encodedInput;
  }
}
