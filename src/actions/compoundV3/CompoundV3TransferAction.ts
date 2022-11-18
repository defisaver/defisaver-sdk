import { Action } from '../../Action';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * CompoundV3TransferAction - Transfer specified amount of assets from src address to dst
 *
 * @category CompundV3
 */
export class CompoundV3TransferAction extends Action {
  /**
     * @param market Comet proxy address of the market
     * @param from address of src
     * @param to address of dst
     * @param asset address of ERC20 token
     * @param amount amount of assets to be transferred
     */
  constructor(market:EthAddress, from:EthAddress, to:EthAddress, asset:EthAddress, amount:uint256) {
    requireAddress(from);
    requireAddress(to);
    requireAddress(asset);
    super(
      'CompV3Transfer',
      getAddr('CompV3Transfer'),
      ['address', 'address', 'address', 'address', 'uint256'],
      [market, from, to, asset, amount],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
      this.args[4],
    ];
  }
}