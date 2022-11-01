import {Action} from "../../Action";
import { requireAddress } from "../../utils/general";
import { getAddr } from '../../addresses.js';
import {EthAddress} from '../../types';

/**
 *  AaveClaimStkAaveAction - Claims stkAave from incentives controller
 */
export default class AaveClaimStkAaveAction extends Action {
  constructor(assets : Array<EthAddress>, amount: string, to: EthAddress) {
    requireAddress(to);
    super(
      'AaveClaimStkAave',
      getAddr('AaveClaimStkAave'),
      ['address[]', 'uint256', 'address'],
      [...arguments],
    );
    this.mappableArgs = [
      this.args[1],
      this.args[2],
    ];
  }
}
