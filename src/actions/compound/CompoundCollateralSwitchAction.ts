import Action from "../../Action";
import { getAddr } from '../../addresses.js';
import {EthAddress,uint256} from '../../types';

/**
 *  CompoundCollateralSwitchAction - Compound enable/disable cToken usage as collateral
 */
export default class CompoundCollateralSwitchAction extends Action {
  constructor(cTokens:Array<EthAddress>, useAsCollateral:Array<boolean>) {
    super(
      'CompCollateralSwitch',
      getAddr('CompCollateralSwitch'),
      ['address[]', 'bool[]'],
      [...arguments],
    );
  }
}