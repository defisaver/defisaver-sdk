import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * Transfers specified tokens from recipe (DsProxy) to specified addresses
 *
 * @category BasicActions
 */
export class SendTokensAction extends Action {
  /**
   * @param tokens Token addressess
   * @param receivers Transfer recipients
   * @param amounts Transfer amounts (-1 for whole Recipe (DsProxy) balance)
   */
  constructor(tokens: Array<EthAddress>, receivers: Array<EthAddress>, amounts:Array<uint256>) {
    super(
      'SendTokens',
      getAddr('SendTokens'),
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