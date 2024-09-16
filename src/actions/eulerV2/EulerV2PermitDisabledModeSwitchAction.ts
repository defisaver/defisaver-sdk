import { Action } from '../../Action';
import { getAddr } from '../../addresses';

/**
 * EulerV2PermitDisabledModeSwitchAction - Switch if permit disabled mode is enabled or not. When in permit disabled mode, no permit action can be executed for the account
 *
 * @category EulerV2
 */
export class EulerV2PermitDisabledModeSwitchAction extends Action {
  /**
   * @param enabled Whether to enable or disable the permit disabled mode
   */
  constructor(
    enabled: boolean,
  ) {
    super(
      'EulerV2PermitDisabledModeSwitch',
      getAddr('EulerV2PermitDisabledModeSwitch'),
      ['bool'],
      [enabled],
    );

    this.mappableArgs = [
      this.args[0],
    ];
  }
}
