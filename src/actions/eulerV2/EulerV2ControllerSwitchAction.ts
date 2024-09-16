import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress } from '../../types';

/**
 * EulerV2ControllerSwitchAction - Switch if vault will be used as controller or not
 *
 * @category EulerV2
 */
export class EulerV2ControllerSwitchAction extends Action {
  /**
   * @param vault The address of the vault
   * @param account The address of the Euler account, defaults to user's wallet
   * @param enableAsController Whether to enable or disable the vault as controller. Disabling controller is only possible if the account has no debt
   */
  constructor(
    vault: EthAddress,
    account: EthAddress,
    enableAsController: boolean,
  ) {
    super(
      'EulerV2ControllerSwitch',
      getAddr('EulerV2ControllerSwitch'),
      ['address', 'address', 'bool'],
      [vault, account, enableAsController],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
    ];
  }
}
