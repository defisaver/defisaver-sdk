import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, bytes32, uint256 } from '../../types';

/**
 * MidnightPaybackDirectAction - Payback a debt directly to the Midnight protocol.
 *
 * @category MidnightPaybackDirect
 */
export class MidnightPaybackDirectAction extends Action {
  /**
   * @param marketId Market id.
   * @param onBehalf Address to payback tokens on behalf of.
   * @param from Address from which to pull the payback tokens.
   * @param amount Amount of tokens to payback. Send type(uint).max to payback whole amount.
   */
  constructor(
    marketId: bytes32,
    onBehalf: EthAddress,
    from: EthAddress,
    amount: uint256,
  ) {
    super(
      'MidnightPaybackDirect',
      getAddr('MidnightPaybackDirect'),
      ['bytes32', 'address', 'address', 'uint256'],
      [marketId, onBehalf, from, amount],
    );
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
    ];
  }
}
