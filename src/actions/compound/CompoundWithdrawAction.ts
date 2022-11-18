import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * CompoundWithdrawAction - Withdraw token from an Compound position
 *
 * @category CompundV2
 */
export class CompoundWithdrawAction extends Action {
  /**
   * @param cTokenAddr
   * @param amount Wei amount in underlying asset decimals (not cAsset) - ie. 18 dec for cETH, not 8
   * @param to
   */
  constructor(cTokenAddr:EthAddress, amount:uint256, to:EthAddress) {
    requireAddress(to);
    super('CompWithdraw', getAddr('CompWithdraw'), ['address', 'uint256', 'address'], [cTokenAddr, amount, to]);
  }
}