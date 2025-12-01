import { Action } from '../../Action';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * AaveV4CollateralSwitchAction
 *
 * @category AaveV4CollateralSwitch
 */
export class AaveV4CollateralSwitchAction extends Action {
  /**
   * @param spoke Address of the spoke.
   * @param onBehalf Address to switch collateral on behalf of. Defaults to the user's wallet if not provided.
   * @param reserveId Reserve id.
   * @param useAsCollateral Whether to use the tokens as collateral.
   */
  constructor(
    spoke: EthAddress,
    onBehalf: EthAddress,
    reserveId: uint256,
    useAsCollateral: boolean,
  ) {
    super(
      'AaveV4CollateralSwitch',
      getAddr('AaveV4CollateralSwitch'),
      ['address', 'address', 'uint256', 'bool'],
      [spoke, onBehalf, reserveId, useAsCollateral],
    );
    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
    ];
  }
}
