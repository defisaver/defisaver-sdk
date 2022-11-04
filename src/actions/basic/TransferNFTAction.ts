import {Action}  from "../../Action";
import { getAddr } from '../../addresses';
import {EthAddress,uint256} from '../../types';
import { requireAddress } from "../../utils/general";

/**
 * @category BasicActions
 */
export class TransferNFTAction extends Action {
  constructor(nftAddr:EthAddress, from:EthAddress, to:EthAddress, nftId:uint256) {
    requireAddress(to);
    super(
      'TransferNFT',
      getAddr('TransferNFT'),
      [
        "address",
        "address",
        "address",
        "uint256"
      ],
      [nftAddr,from,to,nftId]
    );
  }
}