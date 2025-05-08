import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * Transfers specified tokens from user's wallet to specified addresses and unwraps for weth address
 *
 * @category BasicActions
 */
export class SendTokensAndUnwrapAction extends Action {
  /**
   * @param tokens Token addresses
   * @param receivers Transfer recipients
   * @param amounts Transfer amounts
   */
  constructor(tokens: Array<EthAddress>, receivers: Array<EthAddress>, amounts:Array<uint256>) {
    super(
      'SendTokensAndUnwrap',
      getAddr('Empty'),
      [
        'address[]',
        'address[]',
        'uint256[]',
      ],
      [tokens, receivers, amounts],
    );
    this.mappableArgs = [];
    for (let i = 0; i < this.args[0].length; i++) {
      this.mappableArgs.push(this.args[0][i]);
    }
    for (let i = 0; i < this.args[1].length; i++) {
      this.mappableArgs.push(this.args[1][i]);
    }
    for (let i = 0; i < this.args[2].length; i++) {
      this.mappableArgs.push(this.args[2][i]);
    }
  }
}