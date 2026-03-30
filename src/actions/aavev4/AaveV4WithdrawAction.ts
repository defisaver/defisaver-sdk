import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * AaveV4WithdrawAction
 *
 * @category AaveV4
 */
export class AaveV4WithdrawAction extends Action {
  /**
   * @param spoke Address of the spoke.
   * @param onBehalf Address to withdraw tokens on behalf of. Defaults to the user's wallet if not provided.
   * @param to Address that will receive the withdrawn tokens.
   * @param reserveId Reserve id.
   * @param amount Amount of tokens to withdraw. Send type(uint).max to withdraw whole amount.
   */
  constructor(
    spoke: EthAddress,
    onBehalf: EthAddress,
    to: EthAddress,
    reserveId: uint256,
    amount: uint256,
  ) {
    super(
      'AaveV4Withdraw',
      getAddr('AaveV4Withdraw'),
      ['address', 'address', 'address', 'uint256', 'uint256'],
      [spoke, onBehalf, to, reserveId, amount],
    );
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
      this.args[4],
    ];
  }
}
