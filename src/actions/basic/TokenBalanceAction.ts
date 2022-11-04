import {Action}  from "../../Action";
import { getAddr } from '../../addresses';
import {EthAddress} from '../../types';

/**
 * @category BasicActions
 */
export class TokenBalanceAction extends Action {
  constructor(tokenAddr:EthAddress, holderAddr:EthAddress) {
    super(
      'TokenBalance',
      getAddr('TokenBalance'),
      [
        "address",
        "address",
      ],
      [tokenAddr,holderAddr]
    );
  }
}