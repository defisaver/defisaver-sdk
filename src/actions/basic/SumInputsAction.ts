import {Action}  from "../../Action";
import { getAddr } from '../../addresses';
import {uint256} from '../../types';

/**
 * Sums up 2 inputs/return values
 * 
 * @category BasicActions
 */
export class SumInputsAction extends Action {
  constructor(a:uint256, b:uint256) {
    super(
      'SumInputs',
      getAddr('SumInputs'),
      [
        "uint",
        "uint",
      ],
      [a,b]
    );
  }
}