import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256, bytes } from '../../types';
import { FlashLoanId } from './FlashLoanId';

/**
 * Gets a flashloan from UniV3 pool
 *
 * @category Flashloans
 */
export class UniV3FlashLoanAction extends Action implements FlashLoanId {
  public flashLoanId = 6;

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
    super(
      'FLUniV3',
      getAddr('FLUniV3'),
      ['address[]', 'uint256[]', 'uint256[]', 'address', 'address', 'bytes', 'bytes'],
      [[token0, token1, pool], [amount0, amount1], [], getAddr('Empty'), flParamGetterAddr, flParamGetterData, []],
    );
  }
}
