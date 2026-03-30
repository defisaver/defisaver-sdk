import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress } from '../../types';

/**
 * AaveV4RefreshPremiumAction - Refresh the risk premium for user's position
 *
 * @category AaveV4RefreshPremium
 */
export class AaveV4RefreshPremiumAction extends Action {
  /**
   * @param spoke Address of the spoke.
   * @param onBehalf Address to refresh the config on behalf of. Defaults to the user's wallet if not provided.
   * @param refreshDynamicReserveConfig Whether to also refresh the dynamic reserve config for all collateral reserves.
   */
  constructor(
    spoke: EthAddress,
    onBehalf: EthAddress,
    refreshDynamicReserveConfig: boolean,
  ) {
    super(
      'AaveV4RefreshPremium',
      getAddr('AaveV4RefreshPremium'),
      ['address', 'address', 'bool'],
      [spoke, onBehalf, refreshDynamicReserveConfig],
    );
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
    ];
  }
}
