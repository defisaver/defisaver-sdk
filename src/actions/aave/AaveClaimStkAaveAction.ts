import {Action}  from "../../Action";
import { requireAddress } from "../../utils/general";
import { getAddr } from '../../addresses';
import {EthAddress,uint256} from '../../types';

/**
 *  AaveClaimStkAaveAction - Claims stkAave from incentives controller
 * 
 *  @category Aave
 */
export class AaveClaimStkAaveAction extends Action {
  /**
   * @param assets - List of Asset Addresses
   * @param amount - Amount to claim
   * @param to - Address where claimed tokens will end up
   */
  constructor(assets : Array<EthAddress>, amount: uint256, to: EthAddress) {
    requireAddress(to);
    super(
      'AaveClaimStkAave',
      getAddr('AaveClaimStkAave'),
      ['address[]', 'uint256', 'address'],
      [assets,amount,to],
    );
    this.mappableArgs = [
      this.args[1],
      this.args[2],
    ];
  }
}
