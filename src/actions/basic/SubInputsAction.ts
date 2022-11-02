import Action from "../../Action";
import { getAddr } from '../../addresses.js';
import {uint256} from '../../types';

/**
 * Subs 2 inputs/return values
 * 
 * @category BasicActions
 */
export class SubInputsAction extends Action {
  constructor(a:uint256, b:uint256) {
    super(
      'SubInputs',
      getAddr('SubInputs'),
      [
        "uint",
        "uint",
      ],
      [...arguments]
    );
  }
}