import Action from "../../Action";
import { getAddr } from '../../addresses.js';
import {EthAddress} from '../../types';

export default class CompoundGetDebtAction extends Action {
  constructor(cTokenAddr:EthAddress, holderAddr:EthAddress) {
    super(
      'CompGetDebt',
      getAddr('CompGetDebt'),
      [
        "address",
        "address",
      ],
      [...arguments]
    );
  }
}