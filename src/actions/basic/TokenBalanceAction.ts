import Action from "../../Action";
import { getAddr } from '../../addresses.js';
import {EthAddress} from '../../types';

export default class TokenBalanceAction extends Action {
  constructor(tokenAddr:EthAddress, holderAddr:EthAddress) {
    super(
      'TokenBalance',
      getAddr('TokenBalance'),
      [
        "address",
        "address",
      ],
      [...arguments]
    );
  }
}