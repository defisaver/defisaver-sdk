import { FLAction } from './FLAction';
import { getAddr } from '../../addresses';
import { EthAddress, uint256, bytes } from '../../types';
import { FLSource } from './FLSource';

/**
 * Gets a crvUSD flashloan from CurveUsd Flash Minter
 *
 * @category Flashloans
 */
export class CurveUsdFlashLoanAction extends FLAction {
  /**
   * @param amount
   * @param flParamGetterAddr
   * @param flParamGetterData
   */
  constructor(amount: uint256, flParamGetterAddr: EthAddress = getAddr('Empty'), flParamGetterData: bytes = []) {
    super({
      flashLoanId: FLSource.CURVEUSD,
      args: [[], [amount], [], getAddr('Empty'), flParamGetterAddr, flParamGetterData, []],
    });
  }
}
