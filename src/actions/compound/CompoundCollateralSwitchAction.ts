import {Action}  from "../../Action";
import { getAddr } from '../../addresses.js';
import {EthAddress} from '../../types';

/**
 *  CompoundCollateralSwitchAction - Compound enable/disable cToken usage as collateral
 * 
 * @category CompundV2
 */
export class CompoundCollateralSwitchAction extends Action {
  constructor(cTokens:Array<EthAddress>, useAsCollateral:Array<boolean>) {
    super(
      'CompCollateralSwitch',
      getAddr('CompCollateralSwitch'),
      ['address[]', 'bool[]'],
      [cTokens,useAsCollateral],
    );
  }
}