import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * MorphoTokenWrapAction - Wraps Legacy MORPHO token on wallet to new Wrapped MORPHO token
 *
 * @category Morpho
 */
export class MorphoTokenWrapAction extends Action {
  /**
   * @param to - The address to which to send the new Wrapped MORPHO tokens
   * @param amount - The amount of Legacy MORPHO tokens to wrap, if type(uint256).max wraps whole wallet balance
   */
  constructor(to:EthAddress, amount:uint256) {
    super('MorphoTokenWrap', getAddr('MorphoTokenWrap'), ['address', 'uint256'], [to, amount]);

    this.mappableArgs = [
      this.args[0],
      this.args[1],
    ];
  }
}
