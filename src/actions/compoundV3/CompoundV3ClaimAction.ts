import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import { EthAddress } from '../../types';

/**
 * CompoundV3ClaimAction - Claims Comp tokens to, and for, a specified address
 *
 * @category CompundV3
 */
export class CompoundV3ClaimAction extends Action {
  /**
   * @param market Comet proxy address of the market
   * @param onBehalfOf The owner to claim for
   * @param to The address to receive the rewards
   * @param shouldAccrue If true, the protocol will account for the rewards owed to the account as of the current block before transferring
   */
  constructor(market:EthAddress, onBehalfOf:EthAddress, to:EthAddress, shouldAccrue:boolean) {
    requireAddress(onBehalfOf);
    requireAddress(to);
    super(
      'CompV3Claim',
      getAddr('CompV3Claim'),
      ['address', 'address', 'address', 'bool'],
      [market, onBehalfOf, to, shouldAccrue],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
    ];
  }
}