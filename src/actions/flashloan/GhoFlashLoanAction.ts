import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256, bytes } from '../../types';
import { FlashLoanId } from './FlashLoanId';

/**
 * Gets a GHO flashloan from GHO Flash Minter
 *
 * @category Flashloans
 */
export class GhoFlashLoanAction extends Action implements FlashLoanId {
  public flashLoanId = 3;

  /**
   * @param amount
   * @param flParamGetterAddr
   * @param flParamGetterData
   */
  constructor(amount: uint256, flParamGetterAddr: EthAddress = getAddr('Empty'), flParamGetterData: bytes = []) {
    super(
      'FLGho',
      getAddr('FLGho'),
      ['address[]', 'uint256[]', 'uint256[]', 'address', 'address', 'bytes', 'bytes'],
      [[], [amount], [], getAddr('Empty'), flParamGetterAddr, flParamGetterData, []],
    );
  }
}
