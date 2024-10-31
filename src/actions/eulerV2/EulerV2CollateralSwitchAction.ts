import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress } from '../../types';

/**
 * EulerV2CollateralSwitchAction - Switch if vault will be used as collateral or not
 *
 * @category EulerV2
 */
export class EulerV2CollateralSwitchAction extends Action {
  /**
   * @param vault The address of the vault
   * @param account The address of the Euler account, defaults to user's wallet
   * @param enableAsColl Whether to enable or disable the vault as collateral
   */
  constructor(
    vault: EthAddress,
    account: EthAddress,
    enableAsColl: boolean,
  ) {
    super(
      'EulerV2CollateralSwitch',
      getAddr('EulerV2CollateralSwitch'),
      ['address', 'address', 'bool'],
      [vault, account, enableAsColl],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
    ];
  }
}
