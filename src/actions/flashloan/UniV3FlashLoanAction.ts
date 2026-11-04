import { FLAction } from './FLAction';
import { getAddr } from '../../addresses';
import { EthAddress, uint256, bytes } from '../../types';
import { FLSource } from './FLSource';

/**
 * Gets a flashloan from UniV3 pool
 *
 * @category Flashloans
 */
export class UniV3FlashLoanAction extends FLAction {
  /**
   * @param token0
   * @param token1
   * @param pool
   * @param amount0
   * @param amount1
   * @param flParamGetterAddr
   * @param flParamGetterData
   */
  constructor(token0: EthAddress, token1: EthAddress, pool: EthAddress, amount0: uint256, amount1: uint256, flParamGetterAddr: EthAddress = getAddr('Empty'), flParamGetterData: bytes = []) {
    super({
      flashLoanId: FLSource.UNIV3,
      args: [[token0, token1, pool], [amount0, amount1], [], getAddr('Empty'), flParamGetterAddr, flParamGetterData, []],
    });
  }
}
