import { Action } from '../Action';
import { getAddr } from '../addresses';
import { EthAddress, uint256 } from '../types';

/**
 *
 *
 * @category Triggers
 */
export class BalanceAndAllowanceTrigger extends Action {
  constructor(
    from: EthAddress,
    to: EthAddress,
    token: EthAddress,
    amount: uint256,
    useMaxAvailableBalance: boolean,
  ) {
    super(
      'BalanceAndAllowanceTrigger',
      getAddr('BalanceAndAllowanceTrigger'),
      [['address', 'address', 'address', 'uint256', 'bool']],
      [[from, to, token, amount, useMaxAvailableBalance]],
    );
  }
}
