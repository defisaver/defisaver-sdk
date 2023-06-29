import { EthAddress, uint256 } from '../../types';
import { SendTokensAction } from '../basic';
import { getAddr } from '../../addresses';

/**
 * Pays back a flashloan from UniV3
 *
 * @category Flashloans
 */
export class UniV3FlashLoanPaybackAction extends SendTokensAction {
  /**
     * @param token0
     * @param token1
     * @param amount0
     * @param amount1
     */
  constructor(token0: EthAddress, token1: EthAddress, amount0: uint256, amount1: uint256) {
    super([token0, token1], [getAddr('FLUniV3'), getAddr('FLUniV3')], [amount0, amount1]);
  }
}