import { Action } from '../../Action';
import { getAddr } from '../../addresses';

/**
 * EulerV2LockDownModeSwitchAction - Switch if the account is in lock-down mode or not. When in lock-down mode, the account can't perform any authenticated actions
 *
 * @category EulerV2
 */
export class EulerV2LockDownModeSwitchAction extends Action {
  /**
   * @param enabled Whether to enable or disable the lock-down mode
   */
  constructor(enabled: boolean) {
    super(
      'EulerV2LockDownModeSwitch',
      getAddr('EulerV2LockDownModeSwitch'),
      ['bool'],
      [enabled],
    );

    this.mappableArgs = [
      this.args[0],
    ];
  }
}
