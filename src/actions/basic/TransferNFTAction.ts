import Action from "../../Action";
import { getAddr } from '../../addresses.js';
import {EthAddress,uint256} from '../../types';


export default class TransferNFTAction extends Action {
  constructor(nftAddr:EthAddress, from:EthAddress, to:EthAddress, nftId:uint256) {
    super(
      'TransferNFT',
      getAddr('TransferNFT'),
      [
        "address",
        "address",
        "address",
        "uint256"
      ],
      [...arguments]
    );
  }
}